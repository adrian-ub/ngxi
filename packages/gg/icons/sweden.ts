import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSwedenIcon],svg[gg-sweden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4H10v7h13zm0 9v7H10v-7zM8 13v7H1v-7zm-7-2V4h7v7z"></svg:path>`,
})
export class GgSwedenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
