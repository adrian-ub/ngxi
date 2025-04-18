import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStretchToPageOutlineIcon],svg[mdi-stretch-to-page-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 18H4V4h16M8.83 10.25L7.29 8.71L6 10V6h4L8.71 7.29l1.54 1.54m3.5 0l1.54-1.54L14 6h4v4l-1.29-1.29l-1.54 1.54m0 3.5l1.54 1.54L18 14v4h-4l1.29-1.29l-1.54-1.54m-3.5 0l-1.54 1.54L10 18H6v-4l1.29 1.29l1.54-1.54"></svg:path>`,
})
export class MdiStretchToPageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
