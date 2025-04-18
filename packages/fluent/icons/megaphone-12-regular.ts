import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphone12RegularIcon],svg[fluent-megaphone-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.504a1.5 1.5 0 0 0-2.037-1.4l-7 2.683A1.5 1.5 0 0 0 1 5.187V6.27A1.5 1.5 0 0 0 2.044 7.7L3 8.002V9a2 2 0 0 0 3.982.273l2.062.658A1.5 1.5 0 0 0 11 8.5zM6 8.96V9a1 1 0 0 1-2 0v-.678zm3.321-6.923a.5.5 0 0 1 .679.467v5.998a.5.5 0 0 1-.652.476l-7-2.232A.5.5 0 0 1 2 6.269V5.188a.5.5 0 0 1 .321-.467z"></svg:path>`,
})
export class FluentMegaphone12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
