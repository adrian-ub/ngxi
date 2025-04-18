import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPictureInPictureExit20FilledIcon],svg[fluent-picture-in-picture-exit-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 9A1.5 1.5 0 0 0 10 7.5v-4A1.5 1.5 0 0 0 8.5 2h-6A1.5 1.5 0 0 0 1 3.5v4A1.5 1.5 0 0 0 2.5 9zm0 1h-6q-.257 0-.5-.05v4.3A2.75 2.75 0 0 0 4.75 17h10.5A2.75 2.75 0 0 0 18 14.25v-6.5A2.75 2.75 0 0 0 15.25 5H11v2.5A2.5 2.5 0 0 1 8.5 10m3.854.646L15 13.293V11.5a.5.5 0 0 1 1 0v3.003a.5.5 0 0 1-.5.497h-3a.5.5 0 0 1 0-1h1.793l-2.647-2.646a.5.5 0 0 1 .708-.708"></svg:path>`,
})
export class FluentPictureInPictureExit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
