import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBarFilledIcon],svg[lsicon-bar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v1h10v4H3v1h6v4H3v1h11v1H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
