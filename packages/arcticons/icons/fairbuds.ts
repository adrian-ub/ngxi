import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFairbudsIcon],svg[arcticons-fairbuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.249 15.636v16.728M24 4.5v39m5.751-29.441V33.94m5.752-14.003v8.125m-28.756-8.34v8.555m5.751-15.102v21.65M41.254 22.04v3.92"></svg:path>`,
})
export class ArcticonsFairbudsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
