import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWhistleOutlineIcon],svg[mdi-whistle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.76 3.7L2.14 4.88L4.43 8a8.2 8.2 0 0 1 1.92-.72M11 9v2h7v.29l-5 1.42v2.79A4.5 4.5 0 1 1 8.5 11H9V9h-.5a6.5 6.5 0 1 0 6.5 6.5v-1.59L22 12V9m-5.76-5.3L13.85 7h2.47l1.54-2.12M9 2v5h2V2Z"></svg:path>`,
})
export class MdiWhistleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
