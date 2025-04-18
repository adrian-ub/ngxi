import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPineDecorationIcon],svg[openmoji-pine-decoration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m22.707 46.707l9.192 9.193m-2.828-7.072v4.243M26.243 46v4.243m-1.415 2.828h4.243M22 50.243h4.243m23.05-3.536L40.1 55.9m2.829-7.072v4.243M45.757 46v4.243m1.415 2.828h-4.243M50 50.243h-4.243M36 43v13m-3-7l3 3m-3-7l3 3m3 1l-3 3m3-7l-3 3m-1-26v11"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37 28v11"></svg:path><svg:path d="M36.5 8c1.38 0 2.5 1.79 2.5 4s-1.12 4-2.5 4s-2.5-1.79-2.5-4s1.12-4 2.5-4m0-2C33.977 6 32 8.636 32 12s1.977 6 4.5 6s4.5-2.636 4.5-6s-1.977-6-4.5-6m4 18c1.38 0 2.5 1.79 2.5 4s-1.12 4-2.5 4s-2.5-1.79-2.5-4s1.12-4 2.5-4m0-2c-2.523 0-4.5 2.636-4.5 6s1.977 6 4.5 6s4.5-2.636 4.5-6s-1.977-6-4.5-6"></svg:path><svg:path d="M31.5 18c1.38 0 2.5 1.79 2.5 4s-1.12 4-2.5 4s-2.5-1.79-2.5-4s1.12-4 2.5-4m0-2c-2.523 0-4.5 2.636-4.5 6s1.977 6 4.5 6s4.5-2.636 4.5-6s-1.977-6-4.5-6"></svg:path><svg:path d="M36.5 8c1.38 0 2.5 1.79 2.5 4v12.818A1.98 1.98 0 0 1 40.5 24c1.38 0 2.5 1.79 2.5 4v27H29V22c0-2.21 1.12-4 2.5-4s2.5 1.79 2.5 4l.08-10c0-2.21 1.039-4 2.42-4m0-2c-2.52 0-4.42 2.58-4.42 6l-.032 4.042A3.6 3.6 0 0 0 31.5 16c-2.523 0-4.5 2.636-4.5 6v33a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V28c0-3.139-1.72-5.643-4-5.965V12c0-3.364-1.977-6-4.5-6"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32 56v11m8-11v11m6-7.5H26m0 4h20"></svg:path><svg:path fill="#f4aa41" d="M26 56h20v11H26z"></svg:path><svg:path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32 56v11m8-11v11m6-7.5H26m0 4h20"></svg:path><svg:path fill="#b1cc33" d="M29 22h5v33h-5z"></svg:path><svg:path fill="#5c9e31" d="M34 12h5v43h-5z"></svg:path><svg:path fill="#b1cc33" d="M38 28h5v27h-5z"></svg:path><svg:ellipse cx="36.5" cy="12" fill="#f4aa41" rx="2.5" ry="4"></svg:ellipse><svg:ellipse cx="40.5" cy="28" fill="#f4aa41" rx="2.5" ry="4"></svg:ellipse><svg:ellipse cx="31.5" cy="22" fill="#f4aa41" rx="2.5" ry="4"></svg:ellipse><svg:path fill="none" stroke="#186648" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m22.707 46.707l9.192 9.193m-2.828-7.072v4.243M26.243 46v4.243m-1.415 2.828h4.243M22 50.243h4.243m23.05-3.536L40.1 55.9m2.829-7.072v4.243M45.757 46v4.243m1.415 2.828h-4.243M50 50.243h-4.243M36 43v13m-3-7l3 3m-3-7l3 3m3 1l-3 3m3-7l-3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 56h20v11H26z"></svg:path>`,
})
export class OpenmojiPineDecorationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
