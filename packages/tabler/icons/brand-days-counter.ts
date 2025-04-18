import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDaysCounterIcon],svg[tabler-brand-days-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.779 10.007a9 9 0 1 0-10.77 10.772M13 21h8v-7"></svg:path><svg:path d="M12 8v4l3 3"></svg:path></svg:g>`,
})
export class TablerBrandDaysCounterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
