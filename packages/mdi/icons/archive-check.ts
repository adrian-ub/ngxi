import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCheckIcon],svg[mdi-archive-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V8H4v13h9.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6M9 13v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V13zm12-6H3V3h18zm1.5 10.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiArchiveCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
