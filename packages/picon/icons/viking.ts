import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVikingIcon],svg[picon-viking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7C0 1 8 1 7 7M1 6q-2-3 0-5q0 2 2 3m2 0q2-1 2-3q2 2 0 5"></svg:path>`,
})
export class PiconVikingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
