import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAlertOutlineIcon],svg[mdi-home-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.7l5 4.5V18H7v-7.8zM19 20v-8h3L12 3L2 12h3v8m8-12h-2v5h2zm0 7h-2v2h2z"></svg:path>`,
})
export class MdiHomeAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
