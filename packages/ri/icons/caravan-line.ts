import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCaravanLineIcon],svg[ri-caravan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.172 3a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2zM11 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m3.172-11H4v12h3.126a4.002 4.002 0 0 1 7.748 0H19V9.828zM14 7v6H6V7zm-2 2H8v2h4z"></svg:path>`,
})
export class RiCaravanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
