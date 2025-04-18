import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFishIcon],svg[tabler-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.69 7.44A6.97 6.97 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571"></svg:path><svg:path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498C16.75 4.241 9.715 5.86 2 14.506M18 11v.01"></svg:path><svg:path d="M11.5 10.5q-1 1.5 0 3"></svg:path></svg:g>`,
})
export class TablerFishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
