import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTagIcon],svg[tdesign-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.878 23.02l-9.9-9.9L11.1 3.016l9.9-.017v9.917zm.001-2.827L19 12.085V5.002l-7.07.012l-8.122 8.108zm4.117-11.19V7H17v2.004z"></svg:path>`,
})
export class TdesignTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
