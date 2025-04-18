import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRightIcon],svg[mage-direction-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.477 10.826L3.275 6.288a2.154 2.154 0 0 1 2.771-3.016l13.959 6.663a2.155 2.155 0 0 1 0 3.906l-14.16 6.865a2.154 2.154 0 0 1-2.771-3.073l3.403-4.74a2.15 2.15 0 0 0 0-2.067"></svg:path>`,
})
export class MageDirectionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
