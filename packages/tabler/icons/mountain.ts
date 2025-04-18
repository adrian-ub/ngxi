import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMountainIcon],svg[tabler-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0z"></svg:path><svg:path d="m7.5 11l2 2.5L12 11l2 3l2.5-2"></svg:path></svg:g>`,
})
export class TablerMountainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
