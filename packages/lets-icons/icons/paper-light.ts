import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPaperLightIcon],svg[lets-icons-paper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M18 3a3 3 0 0 1 3 3v2.143c0 .334 0 .501-.077.623a.5.5 0 0 1-.157.157C20.644 9 20.477 9 20.143 9H15m3-6a3 3 0 0 0-3 3v3m3-6H7c-1.886 0-2.828 0-3.414.586S3 5.114 3 7v14l3-1l3 1l3-1l3 1V9"></svg:path><svg:path stroke-linecap="round" d="M7 7h4m-3 4H7m0 4h3"></svg:path></svg:g>`,
})
export class LetsIconsPaperLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
