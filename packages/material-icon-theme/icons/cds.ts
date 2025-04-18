import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCdsIcon],svg[material-icon-theme-cds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#0288d1"><svg:rect width="4" height="1" x="7" y="9" ry=".5"></svg:rect><svg:rect width="3" height="1" x="8" y="11" ry=".5"></svg:rect><svg:rect width="4" height="1" x="7" y="13" ry=".5"></svg:rect><svg:path d="m5 9l-1 1l1.5 1.5L4 13l1 1l2.5-2.5z"></svg:path><svg:path d="M6 2a3 3 0 0 0-2.598 1.5a3 3 0 0 0-.187 2.607a3 3 0 0 0-1.514.965a3 3 0 0 0-.42 3.196A3 3 0 0 0 4 12v-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 .515.076l.159-.591A2 2 0 0 1 4 5a2 2 0 0 1 2-2a2 2 0 0 1 2 2l.594.594A2 2 0 0 1 10 5a2 2 0 0 1 2 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2v1a3 3 0 0 0 2.898-2.223A3 3 0 0 0 13.5 6.402a3 3 0 0 0-.63-.267a3 3 0 0 0-1.722-1.906a3 3 0 0 0-2.252-.014a3 3 0 0 0-2.119-2.113A3 3 0 0 0 6 2"></svg:path></svg:g>`,
})
export class MaterialIconThemeCdsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
