import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoOutline24pxIcon],svg[healthicons-no-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.478 8.478a1 1 0 0 1 1.414 0l2.154 2.153l2.153-2.153a1 1 0 1 1 1.414 1.414l-2.153 2.154l2.153 2.153a1 1 0 0 1-1.414 1.414l-2.153-2.153l-2.154 2.153A1 1 0 0 1 8.478 14.2l2.153-2.153l-2.153-2.154a1 1 0 0 1 0-1.414"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNoOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
