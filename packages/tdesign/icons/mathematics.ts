import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMathematicsIcon],svg[tdesign-mathematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.125 1H22v22H2V1.83l10.125 10zm2 20H20v-1.333h-3.15v-2H20v-1.334h-3.15v-2H20V13h-3.15v-2H20V9.667h-3.15v-2H20V6.333h-3.15v-2H20V3h-5.875zm-2 0v-6.36L4 6.615V21z"></svg:path>`,
})
export class TdesignMathematicsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
