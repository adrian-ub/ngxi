import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlag2Icon],svg[tabler-flag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14h14V5H5v16"></svg:path>`,
})
export class TablerFlag2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
