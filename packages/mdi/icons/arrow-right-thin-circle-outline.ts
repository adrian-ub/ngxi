import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowRightThinCircleOutlineIcon],svg[mdi-arrow-right-thin-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.03 12c0-4.41-3.62-8.03-8.03-8.03S3.97 7.59 3.97 12s3.62 8.03 8.03 8.03s8.03-3.62 8.03-8.03M22 12c0 5.54-4.46 10-10 10S2 17.54 2 12S6.46 2 12 2s10 4.46 10 10m-8.46 1v3l3.96-4l-3.96-4v3H6.5v2"></svg:path>`,
})
export class MdiArrowRightThinCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
