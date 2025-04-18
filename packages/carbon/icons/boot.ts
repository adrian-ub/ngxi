import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBootIcon],svg[carbon-boot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17h-6a1 1 0 0 1-1-1V4a2.003 2.003 0 0 0-2-2H5a2.003 2.003 0 0 0-2 2v24a2.003 2.003 0 0 0 2 2h22a2.003 2.003 0 0 0 2-2v-6a5.006 5.006 0 0 0-5-5m3 5v2h-4v-5h1a3.003 3.003 0 0 1 3 3M15 4v2h-4v2h4v2h-4v2h4v2h-4v2h4a3.003 3.003 0 0 0 3 3h3v5h-6.838l-3-1H5V4Zm10 24v-1h-2v1h-2v-1h-2v1h-2v-1h-2v1h-2v-1h-2v1H5v-3h5.838l3 1H27v2Z"></svg:path>`,
})
export class CarbonBootIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
