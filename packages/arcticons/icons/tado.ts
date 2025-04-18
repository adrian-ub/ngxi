import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTadoIcon],svg[arcticons-tado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.272 20.113v7.84c0 .728.59 1.317 1.317 1.317h.395m-3.096-6.983h2.767m7.659 4.348a2.635 2.635 0 0 1-2.635 2.635h0a2.635 2.635 0 0 1-2.636-2.635v-1.713a2.635 2.635 0 0 1 2.635-2.635h0a2.635 2.635 0 0 1 2.636 2.635m0 4.348v-6.983m7.329 2.635a2.635 2.635 0 0 0-2.635-2.635h0a2.635 2.635 0 0 0-2.636 2.635v1.713a2.635 2.635 0 0 0 2.636 2.635h0a2.635 2.635 0 0 0 2.635-2.635m0 2.635V18.73m4.694 3.557a2.635 2.635 0 0 1 2.635 2.635v1.713a2.635 2.635 0 0 1-2.635 2.635h0a2.635 2.635 0 0 1-2.635-2.635v-1.713a2.635 2.635 0 0 1 2.635-2.635"></svg:path><svg:circle cx="36.926" cy="20.838" r="1.186" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTadoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
