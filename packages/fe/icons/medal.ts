import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMedalIcon],svg[fe-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a7 7 0 1 1 0-14a7 7 0 0 1 0 14m0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-12a1 1 0 1 1 0-2a1 1 0 0 1 0 2M9 2h2v4c-1.1 0-2-.9-2-2zm4 0h2v2c0 1.1-.9 2-2 2z"></svg:path>`,
})
export class FeMedalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
