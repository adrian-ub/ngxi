import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsInheritIcon],svg[grommet-icons-inherit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m17 18l-5-3zM7 18l5-3v-4m5 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0ZM4 17a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM17 6a5 5 0 1 1-10.001-.001A5 5 0 0 1 17 6Z"></svg:path>`,
})
export class GrommetIconsInheritIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
