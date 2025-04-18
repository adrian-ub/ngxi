import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStoreAlertIcon],svg[mdi-store-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 7l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm8 11H4v-4h6zm8-12H2V4h16zm5 1v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiStoreAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
