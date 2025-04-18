import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookArrowDownOutlineIcon],svg[mdi-book-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16zM20 20v-4h-2v4h-2l3 3l3-3z"></svg:path>`,
})
export class MdiBookArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
