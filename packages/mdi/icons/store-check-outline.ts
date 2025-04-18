import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStoreCheckOutlineIcon],svg[mdi-store-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.13 2 .35V12l-1-5H4l-1 5v2h1v6h9.09c-.05-.33-.09-.66-.09-1c0-1.23.37-2.36 1-3.31V14h1.69c.95-.63 2.08-1 3.31-1m-7 5H6v-4h6zm-6.96-6l.6-3h12.72l.6 3zM20 6H4V4h16zm2.5 11.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiStoreCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
