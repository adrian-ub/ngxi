import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChecklistDuotoneIcon],svg[si-checklist-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m2 8l2 2l4-4m4 2h10M2 16l2 2l4-4m4 2h10"></svg:path>`,
})
export class SiChecklistDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
