import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudRainIcon],svg[lineicons-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.41 9.233a5.615 5.615 0 0 1 11.228 0a4.766 4.766 0 0 1 1.121 9.276a7 7 0 0 0 .133-1.696a3.266 3.266 0 0 0-1.634-6.094h-.369a.75.75 0 0 1-.75-.75v-.604a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0-1.634 6.095a7 7 0 0 0 .133 1.696A4.768 4.768 0 0 1 6.41 9.233"></svg:path><svg:path fill="currentColor" d="M8.818 14.67a.75.75 0 0 0-1.5 0v6.41a.75.75 0 0 0 1.5 0zm7.161-1.5a.75.75 0 0 1 .75.75v6.41a.75.75 0 0 1-1.5 0v-6.41a.75.75 0 0 1 .75-.75m-3.205 0a.75.75 0 0 0-1.5 0v6.41a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class LineiconsCloudRainIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
