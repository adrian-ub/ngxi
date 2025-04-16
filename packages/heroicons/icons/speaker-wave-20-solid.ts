import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSpeakerWave20SolidIcon],svg[heroicons-speaker-wave-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A7 7 0 0 0 1.5 10c0 .887.165 1.737.468 2.52c.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546zm5.95 1.3a.75.75 0 0 0-1.06 1.061a5.5 5.5 0 0 1 0 7.778a.75.75 0 0 0 1.06 1.06a7 7 0 0 0 0-9.899"></svg:path><svg:path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06a2.5 2.5 0 0 1 0 3.536a.75.75 0 0 0 1.06 1.06a4 4 0 0 0 0-5.656"></svg:path></svg:g>`,
})
export class HeroiconsSpeakerWave20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
