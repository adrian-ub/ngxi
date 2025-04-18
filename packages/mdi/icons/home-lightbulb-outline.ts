import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLightbulbOutlineIcon],svg[mdi-home-lightbulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-8H2l10-9l10 9h-3v8zm7-14.31l-5 4.5V18h10v-7.81zM11 17v-1h2v1zm0-2c-.28 0-.5-.22-.5-.5v-.9C9.6 13.08 9 12.11 9 11c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.11-.6 2.08-1.5 2.6v.9c0 .28-.22.5-.5.5z"></svg:path>`,
})
export class MdiHomeLightbulbOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
