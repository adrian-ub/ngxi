import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRadioFmIcon],svg[mdi-radio-fm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v10h2v-4h3v-2H5V9h4V7zm10 0a2 2 0 0 0-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiRadioFmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
