import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurOkIcon],svg[ix-namur-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-21.333 21.333H85.333v341.334h341.334zm-57.814 70.187l30.294 30.293l-185.814 185.6l-100.48-100.266l30.294-30.294l70.186 70.4z"></svg:path>`,
})
export class IxNamurOkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
