import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClock12Icon],svg[tabler-clock-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 0 0 9 9m9-9a9 9 0 1 0-18 0"></svg:path><svg:path d="M12 7v5l.5.5M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m-6 0v-6"></svg:path></svg:g>`,
})
export class TablerClock12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
