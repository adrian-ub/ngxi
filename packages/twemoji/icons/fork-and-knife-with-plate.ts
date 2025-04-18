import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiForkAndKnifeWithPlateIcon],svg[twemoji-fork-and-knife-with-plate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"></svg:path><svg:path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12"></svg:path><svg:path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11S7 24.075 7 18S11.925 7 18 7s11 4.924 11 11"></svg:path><svg:g fill="#99AAB5"><svg:circle cx="1" cy="1" r="1"></svg:circle><svg:path d="M0 1h2v7H0z"></svg:path><svg:circle cx="5" cy="1" r="1"></svg:circle><svg:path d="M4 1h2v7H4z"></svg:path><svg:circle cx="9" cy="1" r="1"></svg:circle><svg:path d="M8 1h2v7H8zM3 14h4v20H3z"></svg:path><svg:circle cx="5" cy="34" r="2"></svg:circle><svg:path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7z"></svg:path><svg:circle cx="1" cy="8" r="1"></svg:circle><svg:circle cx="5" cy="8" r="1"></svg:circle><svg:circle cx="9" cy="8" r="1"></svg:circle></svg:g><svg:g fill="#99AAB5"><svg:path d="M30 14h4v20h-4z"></svg:path><svg:circle cx="32" cy="34" r="2"></svg:circle><svg:path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11"></svg:path></svg:g>`,
})
export class TwemojiForkAndKnifeWithPlateIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
