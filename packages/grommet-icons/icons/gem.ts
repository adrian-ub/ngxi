import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsGemIcon],svg[grommet-icons-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1h-.414l-.293.293l-3 3L3 4.586v14.828l.293.293l3 3l.293.293h10.828l.293-.293l3-3l.293-.293V4.586l-.293-.293l-3-3L17.414 1zM5 6v12h1V6zm3 15h8v-1H8zm11-3V6h-1v12zM16 3H8v1h8zm0 3v12H8V6z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsGemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
