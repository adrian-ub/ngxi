import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsNotAvailableFillIcon],svg[meteocons-not-available-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#374251" d="M174.6 264.7v-62.3h27.7v107.2H174l-37.2-62v62H109V202.3h27.9Zm68.8 44.9h-27.1l44.6-107.3H288Zm159.6 0h-29.7l-6-18.3h-36.2l-6 18.3h-29.5l39.1-107.3h29.7ZM342.7 256l-4.8 14.6h22.8l-4.9-14.6l-6.6-22.4Z"></svg:path>`,
})
export class MeteoconsNotAvailableFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
