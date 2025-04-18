import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTableOfContentsIcon],svg[oui-table-of-contents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v14h14V1zM0 0h16v16H0zm9 1v14h1V1zM3 3.5h4v-1H3zm0 3h4v-1H3zm0 3h4v-1H3z"></svg:path>`,
})
export class OuiTableOfContentsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
