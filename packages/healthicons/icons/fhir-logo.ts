import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFhirLogoIcon],svg[healthicons-fhir-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24.65 26.361c-5.62 5.642-4.926 11.294-2.374 15.551C16.413 39.412 11 29.5 18.5 20.5C26.5 12.5 25 9 25 6c2.5 4.5 6.406 13.58-.35 20.361"></svg:path><svg:path d="M23.496 42c-1.196-2.593-2.444-8.865 1.18-12.5c6.528-6.73 5.48-12.627 5.335-12.983L30 16.5q.004 0 .01.017c.269.424 5.39 8.73 1.621 17.983c2.175-1.256 3.1-2.971 3.369-3.5c-1.126 9.124-6.882 10.626-11.504 11M21.5 15.5c-3 1.833-9.782 6.5-10.182 12.5s3 8.5 5 10.5c-1-1.5-3-5.2-3-10s5.515-10.833 8.182-13"></svg:path></svg:g>`,
})
export class HealthiconsFhirLogoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
