import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSkipPreviousIcon],svg[zmdi-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64h43v256H0zm75 128L256 64v256z"></svg:path>`,
})
export class ZmdiSkipPreviousIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
