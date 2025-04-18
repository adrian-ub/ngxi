import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsSourcetreeIcon],svg[fa-brands-sourcetree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 0 0 161.5 396v101.7a14.3 14.3 0 0 0 14.3 14.3h96.4a14.3 14.3 0 0 0 14.3-14.3V396.1A203.18 203.18 0 0 0 427.2 203m-271.6 0c0-90.8 137.3-90.8 137.3 0c-.1 89.9-137.3 91-137.3 0"></svg:path>`,
})
export class FaBrandsSourcetreeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
