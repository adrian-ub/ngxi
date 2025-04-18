import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMapPinIcon],svg[circum-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.06a5.5 5.5 0 0 0-.5 10.97v8.41a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5v-8.41A5.5 5.5 0 0 0 12 2.06m0 10a4.5 4.5 0 1 1 4.5-4.5a4.5 4.5 0 0 1-4.5 4.5"></svg:path>`,
})
export class CircumMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
