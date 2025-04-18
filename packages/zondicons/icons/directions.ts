import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDirectionsIcon],svg[zondicons-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 0l10 10l-10 10L0 10zM6 10v3h2v-3h3v3l4-4l-4-4v3H8a2 2 0 0 0-2 2"></svg:path>`,
})
export class ZondiconsDirectionsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
