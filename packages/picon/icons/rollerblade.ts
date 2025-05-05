import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRollerbladeIcon],svg[picon-rollerblade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l2 2l2-2l2 2l1-1l-1-1l-2 2l-2-2l-2 2l-1-1m1-7h3v2q4 0 3 3H1"></svg:path>`,
})
export class PiconRollerbladeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
