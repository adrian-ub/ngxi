import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSunoIcon],svg[simple-icons-suno-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 0C20.642 0 24 5.373 24 12h-9c0 6.627-3.358 12-7.5 12S0 18.627 0 12h9c0-6.627 3.358-12 7.5-12"></svg:path>`,
})
export class SimpleIconsSunoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
