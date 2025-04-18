import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAlertIcon],svg[mdi-content-save-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9H3V5h10m-3 14c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m5-16H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7zm8 10h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiContentSaveAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
