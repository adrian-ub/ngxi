import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsUbuntuIcon],svg[proicons-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12.75" cy="12" r="4.75"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14.546 20.054a8.254 8.254 0 0 1-9.67-5.582m13.95 3.109A8.22 8.22 0 0 0 21 12a8.22 8.22 0 0 0-2.174-5.582m-4.28-2.473a8.254 8.254 0 0 0-9.67 5.582"></svg:path><svg:path d="M15.625 16.98a2.5 2.5 0 1 1 2.5 4.33a2.5 2.5 0 0 1-2.5-4.33ZM4.5 9.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm11.125-6.81a2.5 2.5 0 1 1 2.5 4.33a2.5 2.5 0 0 1-2.5-4.33Z"></svg:path></svg:g>`,
})
export class ProiconsUbuntuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
