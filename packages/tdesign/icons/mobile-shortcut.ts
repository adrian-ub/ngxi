import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileShortcutIcon],svg[tdesign-mobile-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 23H4V1h16v5h-2V3H6v18h12v-3h2zm-6.996-3.996H11V17h2.004zm8.883-2.717l1.568-.781l-1.568-.78l-.781-1.57l-.781 1.57l-1.57.78l1.57.78l.78 1.57zm-5.83-.986l-1.097-2.204L12.756 12l2.204-1.098l1.097-2.204l1.097 2.204L19.358 12l-2.204 1.097zm5.83-6.024l1.568-.78l-1.568-.782l-.781-1.568l-.781 1.568l-1.57.781l1.57.781l.78 1.569z"></svg:path>`,
})
export class TdesignMobileShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
