import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCrossFillIcon],svg[ri-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z"></svg:path>`,
})
export class RiCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
