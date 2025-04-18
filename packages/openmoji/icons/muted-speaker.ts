import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMutedSpeakerIcon],svg[openmoji-muted-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10"><svg:path fill="#d0cfce" stroke="#d0cfce" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m33.77 47.413l16.436 13.128V11.375L33.77 24.721m-.055.08v21.25"></svg:path><svg:path fill="#9b9b9a" stroke="#9b9b9a" stroke-width="1.938" d="M32.793 24.721H20.855c-1.554.005-2.812 1.345-2.817 3v16.692c.005 1.655 1.263 2.995 2.817 3h11.938"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m50.22 45.488l-.001-34.113l-16.435 13.346h-4.128m-9.426.122a3.01 3.01 0 0 0-2.158 2.878v16.692a3.01 3.01 0 0 0 3 3h12.712L50.22 60.541v-5.659M33.784 25.333V29m0 10v8.051M11.605 11.783l48.5 48.499"></svg:path>`,
})
export class OpenmojiMutedSpeakerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
