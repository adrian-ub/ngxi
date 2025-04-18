import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDiskAlertIcon],svg[mdi-disk-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 13.998a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm0-10a8 8 0 1 0 0 16a8 8 0 0 0 0-16zm10 8h2v-5h-2m0 9h2v-2h-2v2z" fill="currentColor"></svg:path>`,
})
export class MdiDiskAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
