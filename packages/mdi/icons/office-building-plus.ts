import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingPlusIcon],svg[mdi-office-building-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 21c-.2-.6-.4-1.3-.4-2c0-1.5.6-2.9 1.5-4H13v-2h2v1.5c.6-.5 1.3-.9 2-1.2V3H3v18h6v-3.5h2V21zM13 5h2v2h-2zm0 4h2v2h-2zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm0-4H5V5h2zm2-2h2v2H9zm0 4h2v2H9zm0 6v-2h2v2zm11 0v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiOfficeBuildingPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
