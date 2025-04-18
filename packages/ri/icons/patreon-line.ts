import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPatreonLineIcon],svg[ri-patreon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.001 17a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m0-2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-13-13h5v20h-5zm2 2v16h1V4z"></svg:path>`,
})
export class RiPatreonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
