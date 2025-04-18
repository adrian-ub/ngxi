import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRulerVerticalIcon],svg[la-ruler-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v32h16V0zm2 2h12v3h-7v2h7v2h-4v2h4v2h-7v2h7v2h-4v2h4v2h-7v2h7v2h-4v2h4v3H10z"></svg:path>`,
})
export class LaRulerVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
