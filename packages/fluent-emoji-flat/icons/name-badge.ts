import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNameBadgeIcon],svg[fluent-emoji-flat-name-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F92F60" d="M16 5.276c-.123 0-.363.126-.5.224c-.07.05-.202.124-.266.194l-3.49 3.978a1 1 0 0 1-1.488 0L7.282 6.36c-.37-.412-1.007-.448-1.39-.048A13.95 13.95 0 0 0 2 16c0 7.732 6.268 14 14 14s14-6.268 14-14c0-3.759-1.481-7.172-3.892-9.687c-.383-.4-1.02-.364-1.39.048l-2.974 3.31a1 1 0 0 1-1.488 0L16.77 5.695a1.3 1.3 0 0 0-.27-.194c-.117-.066-.377-.224-.5-.224"></svg:path><svg:path fill="#fff" d="M6 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNameBadgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
