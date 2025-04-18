import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAttractionIcon],svg[grommet-icons-attraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m13 2l1.5.5L13 3zm1 16l1 5h-2zm0-1.5l2 6.5h-4zM12 6l9 5v2H3v-2zm-7.5 7h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10Zm0 0h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10Z"></svg:path>`,
})
export class GrommetIconsAttractionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
