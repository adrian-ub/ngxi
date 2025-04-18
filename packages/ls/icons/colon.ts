import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsColonIcon],svg[ls-colon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 145h77v77H0zm0 427h77v77H0z"></svg:path>`,
})
export class LsColonIcon {
  readonly viewBox = input("0 0 77 649")
  readonly width = input("0.12em")
  readonly height = input("1em")
}
