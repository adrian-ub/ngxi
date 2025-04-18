import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCupHotIcon],svg[mage-cup-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 9.256h12v7.996a3.997 3.997 0 0 1-4 3.998h-4a4 4 0 0 1-4-3.998z"></svg:path><svg:path d="M15.5 10.256h3a2 2 0 0 1 2 1.999v3.998a2 2 0 0 1-2 1.999h-3.13M5.89 6.748a1.41 1.41 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998m3.25 3.998a1.42 1.42 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998m3.49 3.998a1.41 1.41 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998"></svg:path></svg:g>`,
})
export class MageCupHotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
