const store = new Map();

export default async (request) => {
  const url = new URL(request.url);
  const resource = url.pathname.split('/').filter(Boolean).pop() || 'health';
  if (request.method === 'GET') {
    return Response.json({ ok: true, resource, records: store.get(resource) || [], timestamp: new Date().toISOString() });
  }
  if (request.method === 'POST') {
    const body = await request.json().catch(() => ({}));
    if (!body || typeof body !== 'object') return Response.json({ error: 'Valid JSON is required' }, { status: 400 });
    const record = { id: crypto.randomUUID(), ...body, createdAt: new Date().toISOString() };
    store.set(resource, [...(store.get(resource) || []), record]);
    return Response.json({ ok: true, record }, { status: 201 });
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405, headers: { Allow: 'GET, POST' } });
};
