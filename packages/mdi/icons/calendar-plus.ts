import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarPlusIcon],svg[mdi-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8zm-5 8.5h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class MdiCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
