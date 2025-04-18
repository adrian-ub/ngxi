import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlagPlusOutlineIcon],svg[mdi-flag-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16l-.4-2H7v7H5V4h9l.4 2H20v7.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V8h-5.24l-.4-2H7v6h7.24l.4 2h1.05c-.77.5-1.42 1.2-1.88 2zm5-1v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiFlagPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
