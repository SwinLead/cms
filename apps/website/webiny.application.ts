import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
    pulumiResourceNamePrefix: "wby-",
     domains() {
    return {
      domains: ["forms.swinlead.org"],
      sslSupportMethod: "sni-only",
      acmCertificateArn:
        "arn:aws:acm:us-east-1:905993511401:certificate/523a5c95-293b-4de6-8b6c-73917e0cd0d6"
    };
  }
});
