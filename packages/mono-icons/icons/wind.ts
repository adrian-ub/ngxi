import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsWindIcon],svg[mono-icons-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.806 12.919a4 4 0 1 0-3.787-6.586a1 1 0 0 0 1.49 1.334a2 2 0 0 1 1.695-.657A2 2 0 0 1 18 11H3a1 1 0 1 0 0 2h15q.415 0 .806-.081M5 10h5.516a2.5 2.5 0 1 0-1.88-4.167a1 1 0 0 0 1.491 1.334A.5.5 0 1 1 10.5 8H5a1 1 0 0 0 0 2m11.5 4H8a1 1 0 1 0 0 2h8.5a.5.5 0 1 1-.373.833a1 1 0 1 0-1.49 1.334A2.5 2.5 0 1 0 16.517 14z"></svg:path>`,
})
export class MonoIconsWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
