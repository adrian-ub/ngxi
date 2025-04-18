import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDisabledOffIcon],svg[tabler-disabled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7a2 2 0 1 0-2-2m2 6v4h4l4 5m-4-9h1m-9 .5a5 5 0 1 0 6 7.5M3 3l18 18"></svg:path>`,
})
export class TablerDisabledOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
