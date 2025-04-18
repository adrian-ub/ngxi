import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShadowOffIcon],svg[tabler-shadow-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68-2.32A9 9 0 0 0 7.956 3.957M16 12h2m-5 3h2m-2 3h1m-1-9h4m-4-3h1M3 3l18 18"></svg:path>`,
})
export class TablerShadowOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
