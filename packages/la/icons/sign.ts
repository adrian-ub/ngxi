import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSignIcon],svg[la-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v2H4v2h2v20h2V8h20V6H8V4zm4 6v12h16V10zm2 2h12v8H12z"></svg:path>`,
})
export class LaSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
