import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStopSquareIcon],svg[mage-stop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.008 7.99H8.993c-.554 0-1.003.449-1.003 1.002v6.015c0 .554.45 1.003 1.003 1.003h6.015c.553 0 1.002-.449 1.002-1.003V8.993c0-.553-.449-1.002-1.002-1.002"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageStopSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
