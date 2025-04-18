import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBracketsIcon],svg[tdesign-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.5h5v2H4v13h3v2H2zm15 0h5v17h-5v-2h3v-13h-3z"></svg:path>`,
})
export class TdesignBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
