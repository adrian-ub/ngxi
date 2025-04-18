import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAtticIcon],svg[tdesign-attic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.81 1.414L12 .294l-.81 1.12l-.002.003l-.009.011l-.033.046l-.133.18a55 55 0 0 1-2.214 2.774c-.687.803-1.45 1.64-2.206 2.364c-.767.735-1.48 1.306-2.067 1.622a7.5 7.5 0 0 1-1.002.459C3.231 8.977 3.062 9 3 9H2v2h1c.328 0 .671-.074 1-.178V20H2v2h20v-2h-2v-9.178c.328.104.672.178 1 .178h1V9h-1c-.062 0-.23-.023-.524-.127a7.5 7.5 0 0 1-1.002-.46c-.587-.315-1.3-.886-2.067-1.62a33 33 0 0 1-2.206-2.365a55 55 0 0 1-2.347-2.954l-.033-.046l-.008-.011zM16.867 9H7.133c.285-.242.568-.5.843-.763a35 35 0 0 0 2.343-2.509A56 56 0 0 0 12 3.66a57 57 0 0 0 1.681 2.068a35 35 0 0 0 2.343 2.509q.414.397.843.763M6 11h12v9h-3v-3a3 3 0 0 0-6 0v3H6zm5 9v-3a1 1 0 1 1 2 0v3z"></svg:path>`,
})
export class TdesignAtticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
