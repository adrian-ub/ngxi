import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSwitchRightIcon],svg[marketeq-switch-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M30.208 30.208a5.208 5.208 0 1 0 0-10.416a5.208 5.208 0 0 0 0 10.416"></svg:path><svg:path stroke="#306CFE" d="M31.25 12.5h-12.5c-6.904 0-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5h12.5c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5"></svg:path></svg:g>`,
})
export class MarketeqSwitchRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
