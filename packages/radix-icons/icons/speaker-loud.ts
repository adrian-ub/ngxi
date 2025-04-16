import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsSpeakerLoudIcon],svg[radix-icons-speaker-loud-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.05a.5.5 0 0 1 .28.45v12a.5.5 0 0 1-.807.395L3.221 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.721l3.722-2.895a.5.5 0 0 1 .527-.054m-.72 1.472L3.7 4.895A.5.5 0 0 1 3.393 5H1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.893a.5.5 0 0 1 .307.105l3.05 2.373zm3.528 1.326a.4.4 0 0 1 .555.111a6.41 6.41 0 0 1 0 7.081a.4.4 0 0 1-.666-.443a5.61 5.61 0 0 0 0-6.194a.4.4 0 0 1 .111-.555m2.4-2.418a.4.4 0 0 0-.61.518a8.6 8.6 0 0 1 0 11.104a.4.4 0 0 0 .61.518a9.4 9.4 0 0 0 0-12.14" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsSpeakerLoudIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
