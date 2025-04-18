import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCallMissedIcon],svg[mdi-call-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 7L12 14.59L6.41 9H11V7H3v8h2v-4.59l7 7l9-9"></svg:path>`,
})
export class MdiCallMissedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
