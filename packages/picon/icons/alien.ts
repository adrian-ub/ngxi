import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAlienIcon],svg[picon-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8C-8-3 16-3 5 8M1 2q0 2 2 2q0-2-2-2m4 2q2 0 2-2q-2 0-2 2"></svg:path>`,
})
export class PiconAlienIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
