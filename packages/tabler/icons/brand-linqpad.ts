import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandLinqpadIcon],svg[tabler-brand-linqpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21h3.5l2.5-6l2.5-1l2.5 7h4l1-4.5l-2-1l-7-12L6 3l1.5 4l2.5.5l1 2.5l-7 8z"></svg:path>`,
})
export class TablerBrandLinqpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
