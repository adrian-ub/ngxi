import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBetaIcon],svg[tdesign-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.491v18.51H4v-2h14v-3.058L3.49 9.476zm-2 11.263V5.509L8.51 9.524z"></svg:path>`,
})
export class TdesignBetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
