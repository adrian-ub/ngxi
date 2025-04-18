import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMenuEndwaysFilledIcon],svg[lsicon-menu-endways-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 14V2h1v12zm3 0V2h1v12zm3 0V2h1v12zm3 0V2h1v12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMenuEndwaysFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
