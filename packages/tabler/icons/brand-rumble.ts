import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandRumbleIcon],svg[tabler-brand-rumble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.993 9.108c.383.4.687.863.893 1.368a4.2 4.2 0 0 1 .006 3.166a4.4 4.4 0 0 1-.887 1.372a20 20 0 0 1-2.208 2a20.6 20.6 0 0 1-2.495 1.669a21.3 21.3 0 0 1-5.622 2.202a4.2 4.2 0 0 1-3.002-.404a4 4 0 0 1-1.163-.967a3.8 3.8 0 0 1-.695-1.312C3.621 14.3 3.798 9.89 4.954 5.972c.609-2.057 2.643-3.349 4.737-2.874c3.88.88 7.52 3.147 10.302 6.01"></svg:path><svg:path d="M14.044 13.034c.67-.505.67-1.489 0-2.01a15 15 0 0 0-1.498-1.044a16 16 0 0 0-1.62-.865c-.77-.35-1.63.139-1.753.973a15.4 15.4 0 0 0-.1 3.786a1.232 1.232 0 0 0 1.715 1.027a15 15 0 0 0 1.694-.827a14.5 14.5 0 0 0 1.562-1.035z"></svg:path></svg:g>`,
})
export class TablerBrandRumbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
