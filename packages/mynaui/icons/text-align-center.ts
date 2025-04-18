import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTextAlignCenterIcon],svg[mynaui-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 6h15M7 10h10M4.5 14h15M7 18h10"></svg:path>`,
})
export class MynauiTextAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
