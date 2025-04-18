import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPictureInPictureExit16FilledIcon],svg[fluent-picture-in-picture-exit-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zm-5 4.5V8h5a2 2 0 0 0 2-2V4h3.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 11.5m8.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.793l-1.646-1.647a.5.5 0 0 0-.708.708L11.293 11z"></svg:path>`,
})
export class FluentPictureInPictureExit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
