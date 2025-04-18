import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlPatreonIcon],svg[bxl-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.508" cy="9.831" r="6.496" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2.996 3.335H6.17v17.33H2.996z"></svg:path>`,
})
export class BxlPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
