import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAppsOutlineIcon],svg[lsicon-apps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 2.5H7V7H2.5zm0 6.5H7v4.5H2.5zM9 9h4.5v4.5H9zm0-6.5h4.5V7H9z"></svg:path>`,
})
export class LsiconAppsOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
