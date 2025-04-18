import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveAlertIcon],svg[mdi-archive-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h16v3H2zm1 4h14v12H3zm4.5 3c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM20 13V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiArchiveAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
