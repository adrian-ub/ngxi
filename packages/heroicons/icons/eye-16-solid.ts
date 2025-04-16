import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEye16SolidIcon],svg[heroicons-eye-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566a7.003 7.003 0 0 1 13.238.006a.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsEye16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
