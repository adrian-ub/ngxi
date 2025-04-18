import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLocationCompass1SolidIcon],svg[streamline-location-compass-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0m2.62 4.38a.5.5 0 0 1 .12.512l-1.844 5.532a.5.5 0 0 1-.903.1l-1.318-2.2l-2.198-1.317a.5.5 0 0 1 .099-.903L9.108 4.26a.5.5 0 0 1 .512.12" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLocationCompass1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
