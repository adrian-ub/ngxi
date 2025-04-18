import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFoodKosherIcon],svg[mdi-food-kosher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v2h2c.57 0 1 .43 1 1v7h2v-7c0-1.64-1.36-3-3-3zm6 0v7c0 1.65 1.36 3 3 3h4c1.65 0 3-1.35 3-3V7h-2v7c0 .57-.43 1-1 1h-4c-.57 0-1-.43-1-1v-1h1c1.65 0 3-1.35 3-3V7h-2v3c0 .57-.43 1-1 1H9V7zm11 0v2h2c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1h-2v2h2c1.65 0 3-1.35 3-3v-4c0-1.64-1.35-3-3-3z"></svg:path>`,
})
export class MdiFoodKosherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
