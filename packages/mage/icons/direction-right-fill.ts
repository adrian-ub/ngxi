import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRightFillIcon],svg[mage-direction-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.001 11.86a2.85 2.85 0 0 1-.46 1.56a2.8 2.8 0 0 1-1.22 1.07l-14.15 6.86a2.8 2.8 0 0 1-1.27.3q-.278 0-.55-.06a2.86 2.86 0 0 1-1.6-.9a2.91 2.91 0 0 1-.32-3.48l3.44-4.78c.08-.19.12-.394.12-.6a1.4 1.4 0 0 0-.15-.64l-3.18-4.5a2.87 2.87 0 0 1-.39-1.82a2.89 2.89 0 0 1 2.3-2.51a3 3 0 0 1 1.79.2l14 6.67a2.93 2.93 0 0 1 1.64 2.63"></svg:path>`,
})
export class MageDirectionRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
