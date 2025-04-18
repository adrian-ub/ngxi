import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPatreonFillIcon],svg[ri-patreon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.001 17a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m-13-15h4v20h-4z"></svg:path>`,
})
export class RiPatreonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
