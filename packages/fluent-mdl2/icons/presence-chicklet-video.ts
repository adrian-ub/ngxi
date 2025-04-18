import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PresenceChickletVideoIcon],svg[fluent-mdl2-presence-chicklet-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1536 760l512-256v1040l-512-256v248H0V512h1536z"></svg:path>`,
})
export class FluentMdl2PresenceChickletVideoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
