import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeRoadIcon],svg[icomoon-free-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16h5L12 0H9l.5 4h-3L7 0H4L0 16h5l.5-4h5zm-5.25-6l.5-4h3.5l.5 4z"></svg:path>`,
})
export class IcomoonFreeRoadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
