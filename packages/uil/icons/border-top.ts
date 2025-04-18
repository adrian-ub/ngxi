import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderTopIcon],svg[uil-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-14h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2m0 10a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m8-8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
