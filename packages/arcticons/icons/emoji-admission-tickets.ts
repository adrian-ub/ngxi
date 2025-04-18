import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAdmissionTicketsIcon],svg[arcticons-emoji-admission-tickets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.89 24c0-2.917 2.328-5.416 5.61-6.31v-3.095h-37v3.274c2.924 1.012 5.013 3.393 5.013 6.13S8.424 29.12 5.5 30.132v3.273h37V30.31c-3.223-.893-5.61-3.393-5.61-6.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.855 18.048h20.29v11.904h-20.29z"></svg:path>`,
})
export class ArcticonsEmojiAdmissionTicketsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
