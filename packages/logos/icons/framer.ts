import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFramerIcon],svg[logos-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z"></svg:path>`,
})
export class LogosFramerIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
