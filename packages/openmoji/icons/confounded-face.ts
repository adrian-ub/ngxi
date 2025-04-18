import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiConfoundedFaceIcon],svg[openmoji-confounded-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36 13.116c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:circle cx="36" cy="36" r="23" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m23.64 27.87l7.928 2.431l-7.862 3.248M48.36 27.87l-7.928 2.431l7.862 3.248"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23.93 44.39l3.533-2.896l3.931 5.55L36.002 43l4.608 4.044l3.944-5.55l3.532 2.905v-.01"></svg:path></svg:g>`,
})
export class OpenmojiConfoundedFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
