import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCityBoldIcon],svg[ph-city-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-4V88a12 12 0 0 0-12-12h-72a12 12 0 0 0-12 12v36h-24V40a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v164h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-76-104h48v104h-48Zm-24 48v56h-24v-56ZM44 52h48v152H44Zm36 24v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m96 8v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0m0-48v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
