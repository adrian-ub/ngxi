import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGreatPyramidOfGizaIcon],svg[openmoji-great-pyramid-of-giza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" d="m50.846 56l-9.8-10.557l.352-1.979l2.423-2.892l2.298-1.182l4.244-5.064L57.431 56z"></svg:path><svg:path fill="#e27022" d="M51.957 55L25.968 26.963L35.078 56h5.306z"></svg:path><svg:path fill="#f4aa41" d="m33.477 35.064l-7.509-8.101l2.642 8.101z"></svg:path><svg:path fill="#f4aa41" d="m2.473 55l23.495-28.037L35.111 55z"></svg:path><svg:path fill="#fcea2b" d="m19.18 35.064l6.788-8.101l2.642 8.101z"></svg:path><svg:path fill="#e27022" d="M69.527 55L50.363 34.326L57.105 55z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m44.586 41.219l5.777-6.893L57.105 55"></svg:path><svg:path d="M69.527 55L50.363 34.326L57.105 55zM2.473 55l23.495-28.037L35.111 55zm36.976 0h12.508L25.968 26.963"></svg:path></svg:g>`,
})
export class OpenmojiGreatPyramidOfGizaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
