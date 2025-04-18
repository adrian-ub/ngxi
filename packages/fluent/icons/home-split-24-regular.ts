import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeSplit24RegularIcon],svg[fluent-home-split-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.45 2.532a2.25 2.25 0 0 0-2.9 0L3.8 8.224a2.25 2.25 0 0 0-.8 1.72v9.31c0 .966.784 1.75 1.75 1.75h14.5a1.75 1.75 0 0 0 1.75-1.75v-9.31a2.25 2.25 0 0 0-.8-1.72zm-1.933 1.147a.75.75 0 0 1 .966 0l6.75 5.692a.75.75 0 0 1 .267.573v9.31a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-9.31a.75.75 0 0 1 .267-.573zM12.75 6.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM12 10.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m.75 5.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentHomeSplit24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
