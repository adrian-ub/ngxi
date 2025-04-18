import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCardIcon],svg[tdesign-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v2h4v14h-4v2H6v-2H2V5h4zm0 4H4v10h2zm2 12h8V5H8zM18 7v10h2V7z"></svg:path>`,
})
export class TdesignCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
