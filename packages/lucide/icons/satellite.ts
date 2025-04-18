import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSatelliteIcon],svg[lucide-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 7L9 3L5 7l4 4m8 0l4 4l-4 4l-4-4"></svg:path><svg:path d="m8 12l4 4l6-6l-4-4Zm8-4l3-3M9 21a6 6 0 0 0-6-6"></svg:path></svg:g>`,
})
export class LucideSatelliteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
