import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeadingOffIcon],svg[tabler-heading-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h5m4 0h1M7 7v12M17 5v8m0 4v2m-2 0h4M15 5h4M5 19h4M3 3l18 18"></svg:path>`,
})
export class TablerHeadingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
