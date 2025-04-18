import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusInfoSmallIcon],svg[grommet-icons-status-info-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="10" x="1" y="1" fill="currentColor" fill-rule="evenodd" stroke="currentColor" rx="1"></svg:rect>`,
})
export class GrommetIconsStatusInfoSmallIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
