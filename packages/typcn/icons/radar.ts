import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnRadarIcon],svg[typcn-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c3.86 0 7-3.141 7-7s-3.14-7-7.003-7C8.139 6 5 9.141 5 13s3.14 7 7 7M11 8.102V10a1 1 0 1 0 2 0V8.102A5.01 5.01 0 0 1 16.899 12H15a1 1 0 1 0 0 2h1.899A5.01 5.01 0 0 1 13 17.898V16a1 1 0 1 0-2 0v1.898A5.01 5.01 0 0 1 7.101 14H9a1 1 0 1 0 0-2H7.101A5.01 5.01 0 0 1 11 8.102"></svg:path>`,
})
export class TypcnRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
