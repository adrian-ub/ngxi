import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGlideIcon],svg[simple-icons-glide-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.8 17.52a6.72 6.72 0 0 1 6.72-6.72H24L10.8 24ZM0 13.2L13.2 0v6.48a6.72 6.72 0 0 1-6.72 6.72z"></svg:path>`,
})
export class SimpleIconsGlideIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
