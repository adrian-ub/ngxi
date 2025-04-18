import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMedicalClipboardIcon],svg[circum-medical-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.44 3.5h-1.69v-.53a.95.95 0 0 0-1-.91h-5.5a.95.95 0 0 0-1 .91v.53H6.56A2.5 2.5 0 0 0 4.06 6v13.44a2.5 2.5 0 0 0 2.5 2.5h10.88a2.5 2.5 0 0 0 2.5-2.5V6a2.5 2.5 0 0 0-2.5-2.5m-8.19-.44l5.5.01v1.12c0 .61-.69 1.12-1.5 1.12h-2.5c-.82 0-1.5-.51-1.5-1.12Zm9.69 16.38a1.51 1.51 0 0 1-1.5 1.5H6.56a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h1.72a2.4 2.4 0 0 0 2.47 1.81h2.5a2.4 2.4 0 0 0 2.47-1.81h1.72a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path><svg:path fill="currentColor" d="M14.5 12.71a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-1.5H10a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 0 1 .5-.5a.51.51 0 0 1 .5.5v1.5H14a.51.51 0 0 1 .5.5"></svg:path>`,
})
export class CircumMedicalClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
