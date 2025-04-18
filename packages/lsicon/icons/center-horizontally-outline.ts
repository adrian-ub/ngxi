import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCenterHorizontallyOutlineIcon],svg[lsicon-center-horizontally-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1 8h3m3 0h2m3 0h3M3.5 3.5h3v9h-3zm6 1h3v7h-3z"></svg:path>`,
})
export class LsiconCenterHorizontallyOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
