import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifJmIcon],svg[cif-jm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifJm0" d="M.5.5h300v150H.5z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#009B3A" fill-rule="nonzero" d="M.5.5h300v150H.5z"></svg:path><svg:mask id="cifJm1" fill="#fff"><svg:use href="#cifJm0"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#FED100" stroke-width="20" d="m300.5.5l-150 75l150 75M.5.5l150 75l-150 75" mask="url(#cifJm1)"></svg:path></svg:g>`,
})
export class CifJmIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
