import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneVibrate20RegularIcon],svg[fluent-phone-vibrate-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM2.916 7.223a.5.5 0 0 0-.832.554l.38.57c.284.426.318.972.089 1.43a2.43 2.43 0 0 0 .151 2.43l.38.57a.5.5 0 1 0 .832-.554l-.38-.57a1.43 1.43 0 0 1-.089-1.43a2.43 2.43 0 0 0-.151-2.43zm13.307-.139a.5.5 0 0 1 .693.139l.38.57c.483.724.54 1.652.151 2.43a1.43 1.43 0 0 0 .09 1.43l.38.57a.5.5 0 1 1-.833.554l-.38-.57a2.43 2.43 0 0 1-.151-2.43a1.43 1.43 0 0 0-.09-1.43l-.379-.57a.5.5 0 0 1 .139-.693"></svg:path>`,
})
export class FluentPhoneVibrate20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
