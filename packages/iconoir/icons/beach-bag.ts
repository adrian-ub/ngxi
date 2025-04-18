import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBeachBagIcon],svg[iconoir-beach-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m2.77 13l-.633-3.287A.6.6 0 0 1 2.727 9h18.547a.6.6 0 0 1 .589.713L21.23 13M2.769 13h18.462M2.769 13l.616 4m17.846-4l-.616 4m0 0l-.537 3.491a.6.6 0 0 1-.593.509H4.515a.6.6 0 0 1-.593-.509L3.385 17m17.23 0H3.385"></svg:path><svg:path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"></svg:path></svg:g>`,
})
export class IconoirBeachBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
