const backend_api_base_url = process.env.REACT_APP_API_BASE_URL;

interface Map {
  [key: string]: string | undefined | unknown | Record<string, unknown>;
}

const ApiRequestMap: Map = {
  user: {
    getLogin: `${backend_api_base_url}/user/login`,
    postCreate: `${backend_api_base_url}/user`,
    getById: `${backend_api_base_url}/user`,
    deleteById: `${backend_api_base_url}/user`,
    getAllByPage: `${backend_api_base_url}/user/all`,
    postRefreshToken: `${backend_api_base_url}/user/refreshToken`,
  },
  category: {
    getById: `${backend_api_base_url}/category`,
    deleteById: `${backend_api_base_url}/category`,
    getAllByPage: `${backend_api_base_url}/category/all`,
    postCreate: `${backend_api_base_url}/category`,
  },
  categoryParam: {
    getById: `${backend_api_base_url}/categoryParam`,
    deleteById: `${backend_api_base_url}/categoryParam`,
    getAllByPage: `${backend_api_base_url}/categoryParam/all`,
    postCreate: `${backend_api_base_url}/categoryParam`,
  },
  city: {
    getById: `${backend_api_base_url}/city`,
    getAllByPage: `${backend_api_base_url}/city/all`,
    postCreate: `${backend_api_base_url}/city`,
  },
  consume: {
    getById: `${backend_api_base_url}/consume`,
    getAllByPage: `${backend_api_base_url}/consume/all`,
    postCreate: `${backend_api_base_url}/consume`,
    getDoAudit: `${backend_api_base_url}/consume/audit`
  },
  purchase: {
    getById: `${backend_api_base_url}/purchase`,
    getAllByPage: `${backend_api_base_url}/purchase/all`,
    postCreate: `${backend_api_base_url}/purchase`,
    getDoAudit: `${backend_api_base_url}/purchase/audit`
  },
  permission: {
    getById: `${backend_api_base_url}/permission`,
    getByRoleName: `${backend_api_base_url}/permission/role_name`,
    getByRoleId: `${backend_api_base_url}/permission/role_id`,
  },
  role: {
    getById: `${backend_api_base_url}/role`,
  },
  sku: {
    getById: `${backend_api_base_url}/sku`,
    getAllByPage: `${backend_api_base_url}/sku/all`,
    postCreate: `${backend_api_base_url}/sku`,
    putUpdateById: `${backend_api_base_url}/sku`
  },
  spu: {
    getById: `${backend_api_base_url}/spu`,
    getAllByPage: `${backend_api_base_url}/spu/all`,
    postCreate: `${backend_api_base_url}/spu`,
    putUpdateById: `${backend_api_base_url}/spu`
  },
  warehouse: {
    getById: `${backend_api_base_url}/warehouse`,
    getAllByPage: `${backend_api_base_url}/warehouse/all`,
    postCreate: `${backend_api_base_url}/warehouse`,
    getInventoriesByIdByPage: `${backend_api_base_url}/warehouse/inventory`,
    postAddInventory: `${backend_api_base_url}/warehouse/add`,
    postDeductInventory: `${backend_api_base_url}/warehouse/deduct`,
  },
};

export default ApiRequestMap;
