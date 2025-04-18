import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImgRolDuotoneIcon],svg[lets-icons-img-rol-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".25" d="M7 5.505C4.588 6.043 3 6.96 3 8s1.588 1.957 4 2.495zm10 4.99C19.412 9.957 21 9.04 21 8s-1.588-1.957-4-2.495z"></svg:path><svg:path d="m19.736 18.331l-1.284-1.799c-.653-.913-.979-1.37-1.44-1.408l-.08-.004c-.462-.002-.827.424-1.557 1.276c-.629.733-.943 1.1-1.357 1.13l-.072.003c-.416.001-.757-.34-1.44-1.023l-1.092-1.092c-.666-.666-1-1-1.414-1s-.748.334-1.414 1l-3.444 3.444q.353.161.81.315c1.502.5 3.64.827 6.048.827s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79zM3 18V8c0 .496.36.964 1 1.376C5.496 10.34 8.517 11 12 11s6.504-.66 8-1.624c.64-.412 1-.88 1-1.376v10c0 1.657-4.03 3-9 3s-9-1.343-9-3"></svg:path></svg:g>`,
})
export class LetsIconsImgRolDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
