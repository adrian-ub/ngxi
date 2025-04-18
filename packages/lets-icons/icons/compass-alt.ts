import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassAltIcon],svg[lets-icons-compass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path stroke-linecap="round" d="m8.523 8.584l1.47 5.388a.05.05 0 0 0 .035.036l5.388 1.469a.05.05 0 0 0 .061-.061l-1.47-5.388a.05.05 0 0 0-.035-.036L8.584 8.523a.05.05 0 0 0-.061.061ZM13 11l-2 2"></svg:path></svg:g>`,
})
export class LetsIconsCompassAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
