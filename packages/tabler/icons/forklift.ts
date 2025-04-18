import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerForkliftIcon],svg[tabler-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-5 0h5"></svg:path><svg:path d="M3 17v-6h13v6M5 11V7h4m0 4V5h4l3 6m6 4h-3V5m-3 8h3"></svg:path></svg:g>`,
})
export class TablerForkliftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
