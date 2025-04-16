import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsSpeakerQuietIcon],svg[radix-icons-speaker-quiet-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a.5.5 0 0 0-.8-.4L3.333 4H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h1.833L7.2 13.9a.5.5 0 0 0 .8-.4zM3.8 4.9L7 2.5v10l-3.2-2.4a.5.5 0 0 0-.3-.1h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .3-.1m6.283.156a.4.4 0 1 0-.666.443a3.62 3.62 0 0 1 0 4.002a.4.4 0 1 0 .666.443a4.42 4.42 0 0 0 0-4.888" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsSpeakerQuietIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
