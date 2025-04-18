import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSpaceBarIcon],svg[zmdi-space-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 128h42v128H0V128h43v85h256z"></svg:path>`,
})
export class ZmdiSpaceBarIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
