import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsHpIcon],svg[grommet-icons-hp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.421 0L5 15.127h2.138L10.56 0zm8.993 8.873l-1.496 6.225h2.138l1.496-6.225zm-3.635 0L10.36 24h2.138l3.42-15.127zm-3.647 0l-1.497 6.225h2.138l1.496-6.225z"></svg:path>`,
})
export class GrommetIconsHpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
