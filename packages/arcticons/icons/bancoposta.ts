import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBancopostaIcon],svg[arcticons-bancoposta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.056 31.5v-15h4.91c2.777 0 5.027 2.255 5.027 5.038s-2.25 5.037-5.027 5.037h-4.91M18.194 24a3.75 3.75 0 1 1 0 7.5h-6.187v-15h6.187a3.75 3.75 0 1 1 0 7.5m0 0h-6.187"></svg:path>`,
})
export class ArcticonsBancopostaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
