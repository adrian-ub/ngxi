import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSortLeftIcon],svg[oui-sort-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.308 7h8.136c.307 0 .556.224.556.5s-.249.5-.556.5H4.308l4.096 4.096a.5.5 0 0 1-.707.707L3.454 8.561a1.5 1.5 0 0 1-.433-.925a.45.45 0 0 1 0-.272c.03-.338.175-.666.433-.925l4.243-4.242a.5.5 0 1 1 .707.707z"></svg:path>`,
})
export class OuiSortLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
