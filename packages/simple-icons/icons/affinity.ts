import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAffinityIcon],svg[simple-icons-affinity-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.368 1.08h3.778l.318.55h1.082L24 18.004v.001l-2.036 3.47H13.69l.84 1.445h-.365l-.84-1.446H3.057l-.526-.923h-.652L0 17.298l.002-.001l2.41-4.176l2.23-1.288l3.69-6.39l-.742-1.285zm2.224 5.652L5.066 18.008h6.25l-.723-1.246l6.808.006z"></svg:path>`,
})
export class SimpleIconsAffinityIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
