import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabJapaneseYenCircleIcon],svg[lucide-lab-japanese-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m9 7l3 3v8m0-8l3-3m-6 4h6m-6 4h6"></svg:path></svg:g>`,
})
export class LucideLabJapaneseYenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
