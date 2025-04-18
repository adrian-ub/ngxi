import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAudioDocumentSolidIcon],svg[teenyicons-audio-document-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm6.342 2.526A.5.5 0 0 1 7.9 4.2l.3.4A3.5 3.5 0 0 0 11 6v1a4.5 4.5 0 0 1-3-1.146V10a2 2 0 1 1-1-1.732V4.5a.5.5 0 0 1 .342-.474" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAudioDocumentSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
