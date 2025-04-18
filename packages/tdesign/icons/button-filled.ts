import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignButtonFilledIcon],svg[tdesign-button-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h20v14H2zm2 2v10h16V7zm2 2h12v6H6z"></svg:path>`,
})
export class TdesignButtonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
