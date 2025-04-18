import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrayLightIcon],svg[lets-icons-array-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M15 5h5v10c0 1.886 0 2.828-.586 3.414S17.886 19 16 19h-1M9 5H6a2 2 0 0 0-2 2v12h5"></svg:path>`,
})
export class LetsIconsArrayLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
