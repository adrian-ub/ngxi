import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveCheckOutlineIcon],svg[mdi-archive-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v6h18zm-2 4H5V5h14zm-4.5 4c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5zm3.5 2.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M13 19c0 .7.13 1.37.35 2H4V10h2v9zm9.5-1.75L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiArchiveCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
