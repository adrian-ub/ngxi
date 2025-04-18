import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClosedUmbrellaIcon],svg[openmoji-closed-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8967aa" d="m54.75 64.05l-9.824-39.03c-12.55 2.717-15 5.801-19.45 11.19z"></svg:path><svg:path fill="#b399c8" d="m29.18 31.43l25.57 32.62l-21.28-36.38zm9.64-5.54l15.93 38.16l-9.824-39.03c-1.715 1.145-3.645 1.719-6.111.862z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M25.48 36.21c2.03-.5 3.683-3.204 3.7-4.783c1.717-.292 3.768-1.743 4.293-3.76c1.858.703 4.348-.05 5.344-1.785c1.475 1.057 4.452.992 6.111-.862l9.824 39.03z"></svg:path><svg:path d="M33.47 27.67L22.86 9.52c-2.058-3.519-7.198-.525-5.144 2.988"></svg:path></svg:g>`,
})
export class OpenmojiClosedUmbrellaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
