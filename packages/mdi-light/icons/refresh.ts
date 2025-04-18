import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightRefreshIcon],svg[mdi-light-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h5v5H9V6.5c-2.35.97-4 3.29-4 6c0 3.58 2.91 6.5 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-3.08-2.14-5.66-5-6.33V5.14c3.42.7 6 3.72 6 7.36c0 4.13-3.36 7.5-7.5 7.5A7.5 7.5 0 0 1 4 12.5C4 9.72 5.5 7.3 7.74 6H5z"></svg:path>`,
})
export class MdiLightRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
