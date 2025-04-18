import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsBuyselladsIcon],svg[fa-brands-buysellads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224 150.7l42.9 160.7h-85.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48m-65.3 325.3l-94.5-298.7H159.8L65.3 405.3H156l111.7-91.6l24.2 91.6z"></svg:path>`,
})
export class FaBrandsBuyselladsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
