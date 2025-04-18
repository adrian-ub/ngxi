import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaPauseIcon],svg[iwwa-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.337 4.761v30.478h-6.759V4.761zm1-1H9.578v32.478h8.759zm11.085 1v30.478h-6.759V4.761zm1-1h-8.759v32.478h8.759z"></svg:path>`,
})
export class IwwaPauseIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
