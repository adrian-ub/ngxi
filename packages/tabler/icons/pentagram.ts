import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPentagramIcon],svg[tabler-pentagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.636 5.636a9 9 0 1 1 12.728 12.728A9 9 0 0 1 5.636 5.636"></svg:path><svg:path d="m15.236 11l5.264 4H14l-2 6l-2-6H3.5l5.276-4L6.72 4.72L12 8.5l5.28-3.78z"></svg:path></svg:g>`,
})
export class TablerPentagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
