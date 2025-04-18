import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChecklistIcon],svg[mage-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 6l1 1l2-2m-3 7l1 1l2-2m-3 7l1 1l2-2M9 6h12M9 12h12M9 18h12"></svg:path>`,
})
export class MageChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
