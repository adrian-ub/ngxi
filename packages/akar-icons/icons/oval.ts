import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsOvalIcon],svg[akar-icons-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="12" fill="none" stroke="currentColor" stroke-width="2" rx="8" ry="10"></svg:ellipse>`,
})
export class AkarIconsOvalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
