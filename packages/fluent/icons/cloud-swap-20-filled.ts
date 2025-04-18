import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudSwap20FilledIcon],svg[fluent-cloud-swap-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h2.803a1.5 1.5 0 0 1 .354-1.56l2-2A1.5 1.5 0 0 1 12.915 13h1.17a1.5 1.5 0 0 1 2.476-1.56l1.267 1.266A3.5 3.5 0 0 0 18 11.623c0-1.865-1.47-3.377-3.282-3.377zm-2.793 4.608a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 15h5.586l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L16.293 14h-5.586z"></svg:path>`,
})
export class FluentCloudSwap20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
