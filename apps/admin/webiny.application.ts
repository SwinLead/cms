import { createAdminApp } from "@webiny/serverless-cms-aws";

export default createAdminApp({
    pulumiResourceNamePrefix: "wby-",
     domains() {
    return {
      domains: ["admin.swinlead.org"],
      sslSupportMethod: "sni-only",
      acmCertificateArn:
        "arn:aws:acm:us-east-1:905993511401:certificate/523a5c95-293b-4de6-8b6c-73917e0cd0d6"
    };
  }
});
