import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMathematicsFilledIcon],svg[tdesign-mathematics-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1H12v10.77L2 1.548V23h20v-2.5h-4v-2h4v-1.75h-4v-2h4V13h-4v-2h4V9.25h-4v-2h4V5.5h-4v-2h4zM12 14.63V21H4V6.452z"></svg:path>`,
})
export class TdesignMathematicsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
