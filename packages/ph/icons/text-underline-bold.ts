import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineBoldIcon],svg[ph-text-underline-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 224a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m-76-28a68.07 68.07 0 0 0 68-68V56a12 12 0 0 0-24 0v72a44 44 0 0 1-88 0V56a12 12 0 0 0-24 0v72a68.07 68.07 0 0 0 68 68"></svg:path>`,
})
export class PhTextUnderlineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
