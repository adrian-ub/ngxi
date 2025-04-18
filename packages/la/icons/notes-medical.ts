import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laNotesMedicalIcon],svg[la-notes-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.258 0-2.152.89-2.594 2H6v23h20V5h-7.406C18.152 3.89 17.258 3 16 3m0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1M8 7h2v4h12V7h2v19H8zm7 7v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaNotesMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
