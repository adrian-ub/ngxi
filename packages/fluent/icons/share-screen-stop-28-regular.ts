import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenStop28RegularIcon],svg[fluent-share-screen-stop-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.278 10.217a.75.75 0 0 0-1.06 1.06l2.72 2.72l-2.721 2.725a.75.75 0 0 0 1.061 1.06l2.72-2.723l2.724 2.723a.75.75 0 0 0 1.06-1.06l-2.723-2.724l2.723-2.715a.75.75 0 1 0-1.06-1.062l-2.724 2.717zM4.25 5A2.25 2.25 0 0 0 2 7.249v13.5A2.25 2.25 0 0 0 4.25 23h19.5A2.25 2.25 0 0 0 26 20.75V7.25A2.25 2.25 0 0 0 23.75 5zM3.5 7.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentShareScreenStop28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
