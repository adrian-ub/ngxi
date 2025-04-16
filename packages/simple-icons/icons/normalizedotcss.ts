import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNormalizedotcssIcon],svg[simple-icons-normalizedotcss-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.427 6.361v5.064l-5.381.705l7.058.924v-1.915l5.469 6.5v-5.064l5.382-.705l-7.059-.924v1.914zM12 0l12 12l-12 12L0 12Z"></svg:path>`,
})
export class SimpleIconsNormalizedotcssIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
