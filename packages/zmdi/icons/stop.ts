import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStopIcon],svg[zmdi-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64h256v256H0z"></svg:path>`,
})
export class ZmdiStopIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
