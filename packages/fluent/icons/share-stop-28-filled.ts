import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareStop28FilledIcon],svg[fluent-share-stop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23.75 5A2.25 2.25 0 0 1 26 7.25v13.5A2.25 2.25 0 0 1 23.75 23H4.25A2.25 2.25 0 0 1 2 20.75V7.25A2.25 2.25 0 0 1 4.25 5zm-13.533 5.217a.75.75 0 0 0 0 1.061l2.72 2.72l-2.72 2.724a.75.75 0 0 0 1.061 1.06l2.72-2.723l2.724 2.724a.75.75 0 0 0 1.06-1.061l-2.723-2.724l2.723-2.715a.75.75 0 0 0-1.06-1.062l-2.724 2.717l-2.72-2.72a.75.75 0 0 0-1.06 0z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentShareStop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
