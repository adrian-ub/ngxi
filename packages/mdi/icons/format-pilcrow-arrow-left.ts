import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatPilcrowArrowLeftIcon],svg[mdi-format-pilcrow-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-3l-4 4l4 4v-3h12v-2m-10-7v5h2V4h2v11h2V4h2V2h-8a4 4 0 0 0-4 4a4 4 0 0 0 4 4"></svg:path>`,
})
export class MdiFormatPilcrowArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
