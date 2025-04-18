import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSortRightIcon],svg[oui-sort-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.692 7H3.556C3.249 7 3 7.224 3 7.5s.249.5.556.5h8.136l-4.096 4.096a.5.5 0 0 0 .707.707l4.243-4.242c.258-.259.403-.587.433-.925a.45.45 0 0 0 0-.272a1.5 1.5 0 0 0-.433-.925L8.303 2.197a.5.5 0 1 0-.707.707z"></svg:path>`,
})
export class OuiSortRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
