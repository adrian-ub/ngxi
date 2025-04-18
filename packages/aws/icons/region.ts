import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsRegionIcon],svg[aws-region-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="40" height="40" fill="#00A4A6"></svg:rect><svg:path fill="#FFF" d="M14 20.026 14 11.026 29.293 11.026 25.146 15.172C24.951 15.368 24.951 15.684 25.146 15.88L29.293 20.026 14 20.026ZM26.207 15.526 30.854 10.88C30.996 10.736 31.039 10.522 30.962 10.335 30.885 10.148 30.702 10.026 30.5 10.026L14 10.026 14 8.97C14.596 8.76 15.026 8.198 15.026 7.531 15.026 6.687 14.34 6 13.495 6 12.65 6 11.963 6.687 11.963 7.531 11.963 8.201 12.398 8.766 13 8.973L13 33.026 10 33.026 10 34.026 17 34.026 17 33.026 14 33.026 14 21.026 30.5 21.026C30.702 21.026 30.885 20.904 30.962 20.717 31.039 20.53 30.996 20.316 30.854 20.172L26.207 15.526Z"></svg:path></svg:g>`,
})
export class AwsRegionIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
