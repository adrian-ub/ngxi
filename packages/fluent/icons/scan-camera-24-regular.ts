import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScanCamera24RegularIcon],svg[fluent-scan-camera-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v3a.75.75 0 0 1-1.5 0v-3A3.25 3.25 0 0 1 5.25 2h3a.75.75 0 0 1 0 1.5zm0 17a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0zM18.75 20.5a1.75 1.75 0 0 0 1.75-1.75v-3a.75.75 0 0 1 1.5 0v3A3.25 3.25 0 0 1 18.75 22h-3a.75.75 0 0 1 0-1.5zM13 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9.73 7.678A1.25 1.25 0 0 1 10.848 7h2.304c.473 0 .906.263 1.118.678L14.758 9h.575c.92 0 1.667.596 1.667 1.5v3.864c0 .903-.746 1.636-1.667 1.636H8.667C7.747 16 7 15.267 7 14.364V10.5C7 9.596 7.746 9 8.667 9h.575zM10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class FluentScanCamera24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
