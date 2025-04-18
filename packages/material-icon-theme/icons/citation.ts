import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCitationIcon],svg[material-icon-theme-citation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="#1E88E5" fill-rule="nonzero" d="M10 13h3l2-4V3H9v6h3M2 13h3l2-4V3H1v6h3z"></svg:path><svg:path d="M0 0h16v16H0z"></svg:path></svg:g>`,
})
export class MaterialIconThemeCitationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
