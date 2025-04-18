import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenStop24RegularIcon],svg[fluent-share-screen-stop-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.25A2.25 2.25 0 0 1 4.25 4h15.5A2.25 2.25 0 0 1 22 6.25v11.5A2.25 2.25 0 0 1 19.75 20H4.25A2.25 2.25 0 0 1 2 17.75zm2.25-.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75zm3.97 2.715a.75.75 0 0 1 1.06 0l2.72 2.72l2.725-2.716a.75.75 0 0 1 1.06 1.062l-2.724 2.715l2.724 2.724a.75.75 0 1 1-1.06 1.06L12 13.057L9.28 15.78a.75.75 0 1 1-1.06-1.06l2.72-2.724l-2.72-2.72a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class FluentShareScreenStop24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
