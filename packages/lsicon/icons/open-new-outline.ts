import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOpenNewOutlineIcon],svg[lsicon-open-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11.5 10.5v-6m0 0h-6m6 0l-7 7"></svg:path>`,
})
export class LsiconOpenNewOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
