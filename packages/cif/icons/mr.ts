import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMrIcon],svg[cif-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifMr0" d="M.724.5h299.777v200H.724z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#006233" fill-rule="nonzero" d="M.5.5h299.777v200H.5z"></svg:path><svg:ellipse cx="150.389" cy="75.5" fill="#FFC400" fill-rule="nonzero" rx="64.535" ry="64.583"></svg:ellipse><svg:mask id="cifMr1" fill="#fff"><svg:use href="#cifMr0"></svg:use></svg:mask><svg:ellipse cx="150.389" cy="58.833" fill="#006233" fill-rule="nonzero" mask="url(#cifMr1)" rx="62.453" ry="62.5"></svg:ellipse><svg:path fill="#FFC400" fill-rule="nonzero" d="m126.63 51.108l14.683 10.676l-5.608 17.275l14.684-10.676l14.683 10.676l-5.609-17.275l14.684-10.676h-18.15l-5.608-17.275l-5.609 17.275z"></svg:path></svg:g>`,
})
export class CifMrIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
