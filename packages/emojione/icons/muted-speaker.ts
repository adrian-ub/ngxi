import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMutedSpeakerIcon],svg[emojione-muted-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ff5a79"></svg:circle><svg:circle cx="32" cy="32" r="24" fill="#333"></svg:circle><svg:path fill="#fff" d="M41.5 28.1V13.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.5l-14.1 9.9h-6.2c-1.2 0-2.3.9-2.3 2.1v11.3c0 1.2 1 2.1 2.3 2.1h6.2l14.1 9.9v.5c0 .5.4.9.9.9s.9-.4.9-.9V36c2.3 0 4.2-1.7 4.2-3.9s-1.9-4-4.2-4"></svg:path><svg:path fill="#ff5a79" d="m9.23 13.474l4.243-4.242l41.294 41.294l-4.242 4.243z"></svg:path>`,
})
export class EmojioneMutedSpeakerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
