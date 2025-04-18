import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFormFilledIcon],svg[tdesign-form-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v5H2zm0 7h20v13H2zm16 5.5v-2H6v2zm-4 4v-2H6v2z"></svg:path>`,
})
export class TdesignFormFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
