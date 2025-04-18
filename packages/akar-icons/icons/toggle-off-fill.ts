import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsToggleOffFillIcon],svg[akar-icons-toggle-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10zm0 2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsToggleOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
