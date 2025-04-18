import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBarIcon],svg[ls-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h72v954H0z"></svg:path>`,
})
export class LsBarIcon {
  readonly viewBox = input("0 0 72 954")
  readonly width = input("0.08em")
  readonly height = input("1em")
}
