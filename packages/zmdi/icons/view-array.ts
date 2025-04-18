import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewArrayIcon],svg[zmdi-view-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V43h64v277zM299 43h64v277h-64zM85 320V43h192v277z"></svg:path>`,
})
export class ZmdiViewArrayIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
