import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapSquareOutlineIcon],svg[lsicon-linecap-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13.5h11.5v-11H2M8 8H2m6 0v-.02h-.02V8zm.98-.02a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class LsiconLinecapSquareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
