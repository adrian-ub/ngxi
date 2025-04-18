import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsSpeechSolidIcon],svg[streamline-politics-speech-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3.36A1.68 1.68 0 1 0 7 0a1.68 1.68 0 0 0 0 3.36M4.359 5.788a2.801 2.801 0 0 1 5.282 0H4.36ZM1.894 7.035a.75.75 0 0 0 .065 1.497h.891l.36 4.9a.5.5 0 0 0 .498.463h6.584a.5.5 0 0 0 .498-.464l.36-4.899h.891a.75.75 0 0 0 .065-1.497l-.065.003H1.96zM7 8.7a.5.5 0 0 1 .448.279l.262.53l.586.086a.5.5 0 0 1 .277.853l-.424.413l.1.583a.5.5 0 0 1-.725.527L7 11.695l-.524.275a.5.5 0 0 1-.725-.527l.1-.583l-.424-.413a.5.5 0 0 1 .277-.853l.586-.085l.262-.531A.5.5 0 0 1 7 8.699Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoliticsSpeechSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
