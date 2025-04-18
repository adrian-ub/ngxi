import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTableRoundIcon],svg[hugeicons-table-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="6.5" rx="10" ry="3"></svg:ellipse><svg:path d="M12 20.5a3.9 3.9 0 0 0 2.19-.654a.73.73 0 0 0 .229-.93C14.073 18.258 13.33 17.5 12 17.5s-2.073.76-2.419 1.415a.73.73 0 0 0 .229.93c.6.41 1.362.655 2.19.655m0-3v-8"></svg:path></svg:g>`,
})
export class HugeiconsTableRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
