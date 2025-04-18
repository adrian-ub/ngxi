import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsNormalScreenIcon],svg[akar-icons-normal-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 2v5H2m15-5v5h5M2 17h5v5m15-5h-5v5"></svg:path>`,
})
export class AkarIconsNormalScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
