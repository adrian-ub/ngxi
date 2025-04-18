import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSurfaceHub20FilledIcon],svg[fluent-surface-hub-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.259 2a.5.5 0 0 0-.498.453l-.759 8A.5.5 0 0 0 4.5 11h2.423l-.918 6.43a.5.5 0 0 0 .99.14L7.362 15h2.99l-.347 2.43a.5.5 0 0 0 .99.14l.367-2.57h2.276l.367 2.57a.5.5 0 0 0 .99-.14L14.077 11h.664a.5.5 0 0 0 .498-.453l.759-8A.5.5 0 0 0 15.5 2zm8.236 12h-1.99l.429-3h1.132zm-3 0h-2.99l.429-3h2.99z"></svg:path>`,
})
export class FluentSurfaceHub20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
