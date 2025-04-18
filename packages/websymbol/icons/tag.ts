import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolTagIcon],svg[websymbol-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 136v270l-595 595L0 596L595 1h270zM840 296q28-28 28-67.5T840 161t-67.5-28t-67.5 28t-28 67.5t28 67.5t67.5 28t67.5-28"></svg:path>`,
})
export class WebsymbolTagIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
