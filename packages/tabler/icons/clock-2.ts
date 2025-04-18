import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClock2Icon],svg[tabler-clock-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path><svg:path d="M12 7v5l3 3M4 12h1m14 0h1m-8 7v1"></svg:path></svg:g>`,
})
export class TablerClock2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
