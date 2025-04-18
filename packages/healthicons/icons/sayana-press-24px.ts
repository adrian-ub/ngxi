import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPress24pxIcon],svg[healthicons-sayana-press-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.75 2l-1.5 1v2h-1.5v2H8.5v1.5H7a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9.5a2 2 0 0 0-2-2h-1.5V7h-1.25V5h-1.5zm0 3h-1.5v4h-.5v1a.5.5 0 0 0 .5.5V12h1.5v-1.5a.5.5 0 0 0 .5-.5V9h-.5zm-1.5 15.5V19h1.5v1.5zm3.25-5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPress24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
