import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDropoutIcon],svg[arcticons-dropout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.1 40.906V7.094h5.494C34.892 7.094 42.5 14.702 42.5 24h0c0 9.298-7.608 16.906-16.906 16.906zM5.5 26.95h9.241v9.241H5.5zm0-15.967h9.241v9.241H5.5z"></svg:path>`,
})
export class ArcticonsDropoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
