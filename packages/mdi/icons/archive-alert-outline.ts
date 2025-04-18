import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveAlertOutlineIcon],svg[mdi-archive-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h16v3H2zm5.5 7h5c.28 0 .5.22.5.5V13H7v-1.5c0-.28.22-.5.5-.5M20 13V7h2v6zm0 4v-2h2v2zM3 8h2v10h10V8h2v12H3z"></svg:path>`,
})
export class MdiArchiveAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
