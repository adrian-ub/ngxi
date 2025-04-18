import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextRotationLeftIcon],svg[icon-park-outline-text-rotation-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m13 29l3.667-8M35 29l-3.667-8m0 0L29.5 17L24 5l-5.5 12l-1.833 4m14.666 0H16.667M42 37H6l6 6"></svg:path>`,
})
export class IconParkOutlineTextRotationLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
