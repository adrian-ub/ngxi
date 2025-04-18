import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphoneCircle20RegularIcon],svg[fluent-megaphone-circle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-8 7a8 8 0 1 1 16 0a8 8 0 0 1-16 0m5 2.023l-1.171-.418A1.25 1.25 0 0 1 5 10.427v-.85c0-.529.332-1 .829-1.178l6.501-2.325a1.25 1.25 0 0 1 1.671 1.177v5.502a1.25 1.25 0 0 1-1.67 1.177l-1.379-.493A2 2 0 0 1 7 13zm2.996 1.072L8 12.38V13a1 1 0 0 0 1.996.095m2.671-6.08L6.166 9.342A.25.25 0 0 0 6 9.576v.851c0 .106.066.2.166.236l6.501 2.325a.25.25 0 0 0 .334-.235V7.25a.25.25 0 0 0-.334-.235"></svg:path>`,
})
export class FluentMegaphoneCircle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
