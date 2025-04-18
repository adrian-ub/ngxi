import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveMinusOutlineIcon],svg[mdi-archive-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H4V10h2v9zm6-6c.34 0 .67.04 1 .09V10h-2v3.09c.33-.05.66-.09 1-.09m-9.5-2c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM21 9H3V3h18zm-2-4H5v2h14zm-4 13v2h8v-2z"></svg:path>`,
})
export class MdiArchiveMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
