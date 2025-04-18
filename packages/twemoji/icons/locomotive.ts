import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLocomotiveIcon],svg[twemoji-locomotive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#939598" d="M0 34h36v2H0z"></svg:path><svg:path fill="#231F20" d="M6 27h29v5H6z"></svg:path><svg:circle cx="6.999" cy="32" r="3" fill="#58595B"></svg:circle><svg:circle cx="12.999" cy="32" r="3" fill="#58595B"></svg:circle><svg:circle cx="6.999" cy="32" r="1.5" fill="#A0041E"></svg:circle><svg:circle cx="12.999" cy="32" r="1.5" fill="#A0041E"></svg:circle><svg:path fill="#DD2E44" d="M5 33H1c-1 0-1.5-.5 0-2l4-4c1-1 2-2.001 2 0v4c0 2-.001 2-2 2"></svg:path><svg:path fill="#231F20" d="M8 20c0 3.313-1.343 6-3 6s-3-2.687-3-6s1.343-6 3-6s3 2.686 3 6"></svg:path><svg:path fill="#6D6E71" d="M11 15H7L5 7h8z"></svg:path><svg:path fill="#414042" d="M26 25a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#C1694F" d="M13 26a1 1 0 1 1-2 0V13a1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0V13a1 1 0 1 1 2 0z"></svg:path><svg:path fill="#808285" d="M36 26a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h28a1 1 0 0 1 1 1"></svg:path><svg:circle cx="29.999" cy="31" r="4" fill="#58595B"></svg:circle><svg:circle cx="21.999" cy="31" r="4" fill="#58595B"></svg:circle><svg:circle cx="29.999" cy="31" r="2" fill="#A0041E"></svg:circle><svg:circle cx="21.999" cy="31" r="2" fill="#A0041E"></svg:circle><svg:path fill="#414042" d="M12 3H6a1 1 0 0 0-1 1v3h8V4a1 1 0 0 0-1-1"></svg:path><svg:path fill="#BE1931" d="M23 7h12v18H23z"></svg:path><svg:path fill="#A0041E" d="M36 6a1 1 0 0 1-1 1H23a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1"></svg:path><svg:path fill="#EA596E" d="M25 18h8v5h-8z"></svg:path><svg:path fill="#F4900C" d="M30 32h-8q-.192 0-.371-.071L16.807 30H10a1 1 0 1 1 0-2h7q.193 0 .372.071L22.192 30H30a1 1 0 1 1 0 2"></svg:path><svg:path fill="#55ACEE" d="M33 10a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"></svg:path>`,
})
export class TwemojiLocomotiveIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
