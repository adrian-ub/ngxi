import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocument24LightIcon],svg[fluent-document-24-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a1 1 0 0 1 1-1h6v5a2 2 0 0 0 2 2h5v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm14.998 5.54a.5.5 0 0 0-.013-.16a2 2 0 0 0-.57-1.173l-5.622-5.621a2 2 0 0 0-1.172-.571a.5.5 0 0 0-.162-.013L12.38 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.621l-.002-.08M13 3.217q.045.036.086.077l5.621 5.621q.04.04.077.086H14a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentDocument24LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
