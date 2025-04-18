import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFaxMachineIcon],svg[twemoji-fax-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M8 17H0v15a4 4 0 0 0 8 0a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V17z"></svg:path><svg:path fill="#66757F" d="M32 10H12a4 4 0 0 0-4 4a4 4 0 0 0-8 0v15a4 4 0 0 0 8 0a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4"></svg:path><svg:path fill="#C6E5B3" d="M21 16a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2z"></svg:path><svg:g fill="#CCD6DD"><svg:circle cx="11.5" cy="21.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="21.5" r="1.5"></svg:circle><svg:circle cx="19.5" cy="21.5" r="1.5"></svg:circle><svg:circle cx="11.5" cy="25.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="25.5" r="1.5"></svg:circle><svg:circle cx="19.5" cy="25.5" r="1.5"></svg:circle><svg:circle cx="11.5" cy="29.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="29.5" r="1.5"></svg:circle><svg:circle cx="19.5" cy="29.5" r="1.5"></svg:circle></svg:g><svg:path fill="#99AAB5" d="M34 21a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0 3a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0 3a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1m0 3a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1"></svg:path><svg:circle cx="25" cy="15" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="32" cy="15" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#CCD6DD" d="M32 10H12V4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#99AAB5" d="M30 4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1m-8 3a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiFaxMachineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
