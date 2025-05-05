import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTabIcon],svg[picon-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V5l1-2h3l1 2h3v3"></svg:path>`,
})
export class PiconTabIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
