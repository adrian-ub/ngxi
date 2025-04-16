import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidSpeakerphoneIcon],svg[heroicons-solid-speakerphone-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 3a1 1 0 0 0-1.447-.894L8.763 6H5a3 3 0 0 0 0 6h.28l1.771 5.316A1 1 0 0 0 8 18h1a1 1 0 0 0 1-1v-4.382l6.553 3.276A1 1 0 0 0 18 15z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidSpeakerphoneIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
