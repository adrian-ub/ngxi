import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTableAddFilledIcon],svg[tdesign-table-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 6V4h16v2zm12 9h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class TdesignTableAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
