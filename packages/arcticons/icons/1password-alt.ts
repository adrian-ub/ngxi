import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1passwordAltIcon],svg[arcticons-1password-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.583 9.42h-5.166a1 1 0 0 0-1 1v6l2.293 2.293a1 1 0 0 1 0 1.415l-2.293 2.293V37.58a1 1 0 0 0 1 1h5.166a1 1 0 0 0 1-1v-6l-2.293-2.293a1 1 0 0 1 0-1.415l2.293-2.292V10.42a1 1 0 0 0-1-1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.42 31.6c-2.85-1.34-4.82-4.24-4.82-7.6s1.97-6.26 4.82-7.6m7.16 0c2.85 1.34 4.82 4.24 4.82 7.6s-1.97 6.26-4.82 7.6"></svg:path>`,
})
export class Arcticons1passwordAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
