import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biToggleOnIcon],svg[bi-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class BiToggleOnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
