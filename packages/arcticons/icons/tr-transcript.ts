import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrTranscriptIcon],svg[arcticons-tr-transcript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.593 22.916h8.673V42.43h-8.673zM5.5 20.748l2.168 2.168c11.925-4.337 11.925-13.01 0-17.346L5.5 7.74q9.758 6.504 0 13.009m37-.001l-2.179 2.168c-11.925-4.337-11.925-13.01.01-17.346L42.5 7.74q-9.756 6.504 0 13.009"></svg:path>`,
})
export class ArcticonsTrTranscriptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
