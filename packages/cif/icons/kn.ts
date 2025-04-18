import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifKnIcon],svg[cif-kn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifKn0" d="M.5.5h300v200H.5z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#009E49" fill-rule="nonzero" d="M300.5.5H.5v200"></svg:path><svg:path fill="#CE1126" fill-rule="nonzero" d="M.5 200.5h300V.5"></svg:path><svg:mask id="cifKn1" fill="#fff"><svg:use href="#cifKn0"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#FCD116" stroke-width="80" d="m.5 200.5l300-200" mask="url(#cifKn1)"></svg:path><svg:mask id="cifKn2" fill="#fff"><svg:use href="#cifKn0"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#000" stroke-width="60" d="m.5 200.5l300-200" mask="url(#cifKn2)"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="m180.544 70.072l20.326.82l5.501 19.585l7.062-19.078l20.326.82l-15.962-12.611l7.061-19.079l-16.927 11.284l-15.963-12.61l5.502 19.585zm-114 76l20.326.82l5.501 19.585l7.062-19.078l20.326.82l-15.962-12.611l7.061-19.079l-16.927 11.284l-15.963-12.61l5.502 19.585z"></svg:path></svg:g>`,
})
export class CifKnIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
