import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStethoscopeLineIcon],svg[ri-stethoscope-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v2H6v4a4 4 0 0 0 8 0V5h-2V3h3a1 1 0 0 1 1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.238a3 3 0 1 1 2.05.148A5.502 5.502 0 0 1 8.999 16.5v-1.583A6 6 0 0 1 4 9V4a1 1 0 0 1 1-1zm11 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiStethoscopeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
