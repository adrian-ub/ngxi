import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlance28FilledIcon],svg[fluent-glance-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v6.5A2.75 2.75 0 0 0 5.75 15h4.5A2.75 2.75 0 0 0 13 12.25v-6.5A2.75 2.75 0 0 0 10.25 3zM3 20.75A2.75 2.75 0 0 1 5.75 18h4.5A2.75 2.75 0 0 1 13 20.75v1.5A2.75 2.75 0 0 1 10.25 25h-4.5A2.75 2.75 0 0 1 3 22.25zm12-15A2.75 2.75 0 0 1 17.75 3h4.5A2.75 2.75 0 0 1 25 5.75v1.5A2.75 2.75 0 0 1 22.25 10h-4.5A2.75 2.75 0 0 1 15 7.25zm0 10A2.75 2.75 0 0 1 17.75 13h4.5A2.75 2.75 0 0 1 25 15.75v6.5A2.75 2.75 0 0 1 22.25 25h-4.5A2.75 2.75 0 0 1 15 22.25z"></svg:path>`,
})
export class FluentGlance28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
