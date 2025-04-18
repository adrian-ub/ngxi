import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockPlusIcon],svg[tabler-clock-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.984 12.535a9 9 0 1 0-8.468 8.45M16 19h6m-3-3v6"></svg:path><svg:path d="M12 7v5l3 3"></svg:path></svg:g>`,
})
export class TablerClockPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
