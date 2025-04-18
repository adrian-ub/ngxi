import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonSwap24FilledIcon],svg[fluent-person-swap-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 13.997a2.25 2.25 0 0 1 2.25 2.25v.918c0 .285-.045.567-.13.836h-2.035a1.75 1.75 0 0 0-2.822-1.98l-2.5 2.499a1.75 1.75 0 0 0 0 2.476l.935.933q-.697.07-1.452.07c-3.42 0-5.943-1.073-7.486-3.237A2.75 2.75 0 0 1 2 17.166v-.92a2.25 2.25 0 0 1 2.249-2.249zM9.997 2.002a5 5 0 1 1 0 10a5 5 0 0 1 0-10m4.784 15.782a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.061l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.498a.75.75 0 0 0 0-1.06l-2.5-2.502a.75.75 0 1 0-1.06 1.06l1.218 1.22h-6.877z"></svg:path>`,
})
export class FluentPersonSwap24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
