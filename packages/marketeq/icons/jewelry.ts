import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqJewelryIcon],svg[marketeq-jewelry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.354 16.667a14.584 14.584 0 1 1-14.708 0"></svg:path><svg:path stroke="#306CFE" d="M27.604 22.917h-5.208L14.583 12.5l5.209-6.25h10.416l5.209 6.25z"></svg:path></svg:g>`,
})
export class MarketeqJewelryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
