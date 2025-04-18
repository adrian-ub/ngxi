import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableAlertIcon],svg[mdi-table-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h14c1.11 0 2 .89 2 2v12c0 1.11-.89 2-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8zm8 0v4h6V8zm-8 6v4h6v-4zm8 0v4h6v-4zm12-7h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class MdiTableAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
