import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFridgeFillIcon],svg[ri-fridge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.998 12v10a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V12zm-11 2h-2v5h2zm10-13a1 1 0 0 1 1 1v8h-16V2a1 1 0 0 1 1-1zm-10 3h-2v4h2z"></svg:path>`,
})
export class RiFridgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
