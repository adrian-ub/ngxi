import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsUqrIcon],svg[unjs-uqr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#A3673E" d="M19.025 31.043h-4.157V1h2.99c.172 0 .34.073.457.2l.612.663a.36.36 0 0 1 .098.247z"></svg:path><svg:path fill="#BF855E" d="M18.133 31.043h-4.158V1.34a.34.34 0 0 1 .34-.34h3.478a.34.34 0 0 1 .34.34z"></svg:path><svg:path fill="url(#unjsUqr0)" d="m19.025 20.75l-5.05.005v3.75l5.05-.005z"></svg:path><svg:path fill="url(#unjsUqr1)" d="m13.975 5.505l5.05-.005V1.75l-5.05.005z"></svg:path><svg:path fill="url(#unjsUqr2)" d="M27.135 22.408H5.562a.5.5 0 0 1-.247-.066l-.993-.557a.42.42 0 0 1-.212-.363V3.497c0-.135.11-.247.247-.247h22.276c.12 0 .24.04.335.112l.472.363a.5.5 0 0 1 .197.4V21.9a.5.5 0 0 1-.502.508"></svg:path><svg:path fill="#F5F5F5" d="M26.568 21.668H4.361a.25.25 0 0 1-.252-.253V3.503c0-.14.112-.253.252-.253h22.205c.14 0 .253.112.253.252v17.913c0 .14-.113.253-.253.253"></svg:path><svg:path stroke="#616161" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M10.06 9.563h10.76m-10.64 5.624h10.76"></svg:path><svg:path fill="url(#unjsUqr3)" d="M26.578 6.64H4.352a.243.243 0 0 1-.242-.242V3.493c0-.135.11-.243.242-.243h22.223c.135 0 .242.11.242.243v2.905a.24.24 0 0 1-.24.242"></svg:path><svg:path fill="url(#unjsUqr4)" d="M7.502 3.498V21.42c0 .137-.11.247-.247.247H4.357a.246.246 0 0 1-.247-.247V3.497c0-.137.11-.247.247-.247h2.898c.135 0 .247.11.247.248"></svg:path><svg:defs><svg:lineargradient id="unjsUqr0" x1="16.5" x2="16.5" y1="20.407" y2="24.162" gradientUnits="userSpaceOnUse"><svg:stop offset=".167" stop-color="#424242"></svg:stop><svg:stop offset=".944" stop-color="#424242" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="unjsUqr1" x1="16.5" x2="16.5" y1="5.753" y2="2.386" gradientUnits="userSpaceOnUse"><svg:stop offset=".232" stop-color="#424242"></svg:stop><svg:stop offset=".943" stop-color="#424242" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="unjsUqr2" x1="15.875" x2="15.875" y1="22.584" y2="7.077" gradientUnits="userSpaceOnUse"><svg:stop offset=".373" stop-color="#9E9E9E"></svg:stop><svg:stop offset="1" stop-color="#BDBDBD"></svg:stop></svg:lineargradient><svg:lineargradient id="unjsUqr3" x1="15.465" x2="15.465" y1="5.804" y2="-1.505" gradientUnits="userSpaceOnUse"><svg:stop offset=".202" stop-color="#F5F5F5"></svg:stop><svg:stop offset="1" stop-color="#BDBDBD"></svg:stop></svg:lineargradient><svg:lineargradient id="unjsUqr4" x1="8.679" x2="1.37" y1="12.459" y2="12.459" gradientUnits="userSpaceOnUse"><svg:stop offset=".507" stop-color="#BDBDBD" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#BDBDBD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class UnjsUqrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
