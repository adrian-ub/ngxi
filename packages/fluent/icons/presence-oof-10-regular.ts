import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceOof10RegularIcon],svg[fluent-presence-oof-10-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.349 3.85a.5.5 0 1 0-.708-.706l-1.497 1.5a.5.5 0 0 0 0 .707l1.497 1.5a.5.5 0 1 0 .708-.707l-.646-.646h1.8a.5.5 0 1 0 0-1h-1.8zM4.998 0a4.998 4.998 0 1 0 0 9.995a4.998 4.998 0 0 0 0-9.995M1 4.998a3.998 3.998 0 1 1 7.995 0a3.998 3.998 0 0 1-7.995 0"></svg:path>`,
})
export class FluentPresenceOof10RegularIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
