import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXrtIcon],svg[token-branded-xrt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#03A2E5" fill-rule="evenodd" d="M12.282 5.174a.56.56 0 1 0-.637-.92a.562.562 0 0 0 .066.932L3.816 18.803a.56.56 0 1 0 .306.5h15.729a.56.56 0 0 0 .562.56a.56.56 0 1 0-.017-1.12zm7.84 13.65L11.986 5.26L4.029 18.993l.017.028h15.881a.56.56 0 0 1 .194-.198" clip-rule="evenodd"></svg:path><svg:path fill="#545873" d="m8.055 16.496l3.93-2.028l3.934 2.028z"></svg:path><svg:path fill="#00A8EB" d="m11.987 9.753l-3.932 6.74l3.932-1.988z"></svg:path><svg:path fill="#B4C0F2" d="m11.987 9.753l3.932 6.74l-3.932-1.988z"></svg:path></svg:g>`,
})
export class TokenBrandedXrtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
