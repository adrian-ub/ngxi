import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEqualsIcon],svg[picon-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h6v1H1m0 2h6v1H1"></svg:path>`,
})
export class PiconEqualsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
