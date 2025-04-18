import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTakeoutBoxIcon],svg[twemoji-takeout-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E1E8ED" d="M34 7H2l3 29h26z"></svg:path><svg:path fill="#99AAB5" d="M14 7H2l3 29h10z"></svg:path><svg:path fill="#66757F" d="M34.901.567A1 1 0 0 0 34 0H16a1 1 0 0 0-.781.375L9.439 7H12l4.48-5h15.438l-6.7 8.375a1 1 0 0 0 1.563 1.25l8-10c.24-.3.286-.712.12-1.058"></svg:path><svg:path fill="#DD2E44" d="M30.495 32h-14l2.159-3h10zm-3.073-4h-7.429l.768-1h6zm1.392-2h-10l2.159-3h6zm-1.787-4h-6l1.053-1h4zm.106-2h-6l2.159-3h2zm-1.787-4h-2l1.159-3z"></svg:path><svg:path fill="#BE1931" d="M14.008 32H5.169l.944-3h6.314zm-2.499-4h-4.69l.345-1h3.788zm.599-2H5.795l.944-3h3.789zm-1.686-4H6.633l.526-1h2.525zm-.213-2H6.421l.945-3h1.262zm-1.687-4H7.26l.313-3z"></svg:path>`,
})
export class TwemojiTakeoutBoxIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
