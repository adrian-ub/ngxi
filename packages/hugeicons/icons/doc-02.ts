import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoc02Icon],svg[hugeicons-doc-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 14.016c-.046-.992-.723-1.016-1.643-1.016c-1.416 0-1.651.338-1.651 1.667v1.666c0 1.329.235 1.667 1.651 1.667c.92 0 1.597-.024 1.643-1.016M10.295 15.5c0 1.38-1.106 2.5-2.47 2.5c-.309 0-.463 0-.577-.067c-.275-.16-.247-.485-.247-.766v-3.334c0-.281-.028-.606.247-.766c.114-.067.268-.067.576-.067c1.365 0 2.47 1.12 2.47 2.5M14 18c-.776 0-1.165 0-1.406-.244s-.241-.637-.241-1.423v-1.666c0-.786 0-1.179.241-1.423S13.224 13 14 13s1.165 0 1.406.244s.241.637.241 1.423v1.666c0 .786 0 1.179-.241 1.423S14.776 18 14 18"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsDoc02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
