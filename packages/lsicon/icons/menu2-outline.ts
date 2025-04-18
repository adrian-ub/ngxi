import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMenu2OutlineIcon],svg[lsicon-menu2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 12.5h12M2 8h12M2 3.5h12"></svg:path>`,
})
export class LsiconMenu2OutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
