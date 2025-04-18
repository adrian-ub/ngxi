import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEyeSlashSolidIcon],svg[heroicons-eye-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06zm19.146 10.083a11.25 11.25 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.2 11.2 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69c.12.362.12.752 0 1.113"></svg:path><svg:path d="M15.75 12q0 .27-.037.53l-4.244-4.243q.26-.037.531-.037A3.75 3.75 0 0 1 15.75 12m-3.22 3.713l-4.243-4.244q-.037.26-.037.531a3.75 3.75 0 0 0 4.28 3.713"></svg:path><svg:path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114c1.489 4.467 5.704 7.69 10.675 7.69c1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12"></svg:path></svg:g>`,
})
export class HeroiconsEyeSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
