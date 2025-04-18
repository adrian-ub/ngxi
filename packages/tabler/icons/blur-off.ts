import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBlurOffIcon],svg[tabler-blur-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v5m0 4v8M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M16 12h5m-8-3h7m-8-3h6m-6 12h6m-6-3h3m4 0h1M3 3l18 18"></svg:path>`,
})
export class TablerBlurOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
