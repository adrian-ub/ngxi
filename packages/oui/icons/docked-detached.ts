import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiDockedDetachedIcon],svg[oui-docked-detached-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h-1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6z"></svg:path><svg:rect width="6" height="5" x="10" fill="currentColor" rx=".5"></svg:rect>`,
})
export class OuiDockedDetachedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
