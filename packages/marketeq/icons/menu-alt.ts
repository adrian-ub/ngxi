import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMenuAltIcon],svg[marketeq-menu-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25h37.5"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h37.5m-37.5 25h37.5z"></svg:path></svg:g>`,
})
export class MarketeqMenuAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
