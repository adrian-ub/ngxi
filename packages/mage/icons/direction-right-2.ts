import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRight2Icon],svg[mage-direction-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.392 10.884L3.19 6.28a2.164 2.164 0 0 1 2.785-3.03L20 9.945a2.165 2.165 0 0 1 0 3.924L5.772 20.767a2.164 2.164 0 0 1-2.8-2.943l3.42-4.762a2.09 2.09 0 0 0 0-2.178m7.013 1.168H6.68"></svg:path>`,
})
export class MageDirectionRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
