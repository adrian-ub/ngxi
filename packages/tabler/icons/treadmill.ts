import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTreadmillIcon],svg[tabler-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 14l4 1l.5-.5M12 18v-3l-3-2.923L9.75 7"></svg:path><svg:path d="M6 10V8l4-1l2.5 2.5l2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1l1-11l2-1"></svg:path></svg:g>`,
})
export class TablerTreadmillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
