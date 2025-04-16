import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSlash16SolidIcon],svg[heroicons-slash-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.074 2.047a.75.75 0 0 1 .449.961L6.705 13.507a.75.75 0 0 1-1.41-.513L9.113 2.496a.75.75 0 0 1 .961-.449" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSlash16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
