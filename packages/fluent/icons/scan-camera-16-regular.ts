import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanCamera16RegularIcon],svg[fluent-scan-camera-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 3.5 1h1a.5.5 0 0 1 0 1zm0 12A1.5 1.5 0 0 1 2 12.5v-1a.5.5 0 0 0-1 0v1A2.5 2.5 0 0 0 3.5 15h1a.5.5 0 0 0 0-1zM14 3.5A1.5 1.5 0 0 0 12.5 2h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 15 3.5v1a.5.5 0 0 1-1 0zM12.5 14a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1zm-8-6.615V10a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7.385a1 1 0 0 0-1-1h-.75l-.58-.92A1 1 0 0 0 8.323 5h-.648a1 1 0 0 0-.845.466l-.581.919H5.5a1 1 0 0 0-1 1M9 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentScanCamera16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
