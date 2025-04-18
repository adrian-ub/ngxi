import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlertCircleCheckIcon],svg[mdi-alert-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 22.16l-2.75-3L17.16 18l1.59 1.59L22.34 16l1.16 1.41zM13 13V7h-2v6zm0 4v-2h-2v2zM12 2c5.5 0 10 4.5 10 10l-.09 1.31A6.005 6.005 0 0 0 14 19c0 .95.22 1.85.62 2.65c-.84.23-1.71.35-2.62.35c-5.5 0-10-4.5-10-10S6.5 2 12 2"></svg:path>`,
})
export class MdiAlertCircleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
