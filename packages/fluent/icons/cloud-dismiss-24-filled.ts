import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudDismiss24FilledIcon],svg[fluent-cloud-dismiss-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.08 8.02a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 4.053 4.973A6.5 6.5 0 0 0 10.018 17H6.5a4.5 4.5 0 0 1-.42-8.982M22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646l-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647l1.646 1.647a.5.5 0 0 0 .708-.708L17.207 16.5l1.647-1.646a.5.5 0 0 0-.708-.708L16.5 15.793z"></svg:path>`,
})
export class FluentCloudDismiss24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
