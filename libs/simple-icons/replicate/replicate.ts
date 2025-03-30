import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siReplicate],svg[si-replicate]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Replicate</svg:title>
    <svg:path
      d="M24 10.262v2.712h-9.518V24h-3.034V10.262zm0-5.131v2.717H8.755V24H5.722V5.131zM24 0v2.717H3.034V24H0V0z"
    />`,
})
export class SiReplicate {}
