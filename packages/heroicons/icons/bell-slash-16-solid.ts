import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBellSlash16SolidIcon],svg[heroicons-bell-slash-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 7.379v-.904l6.743 6.743A3 3 0 0 1 5 12H3a1 1 0 0 1-1-1v-.586a1 1 0 0 1 .293-.707L3.56 8.44A1.5 1.5 0 0 0 4 7.38M6.5 12a1.5 1.5 0 0 0 3 0z" clip-rule="evenodd"></svg:path><svg:path d="M14 11a1 1 0 0 1-.096.429L4.92 2.446A4 4 0 0 1 12 5v2.379c0 .398.158.779.44 1.06l1.267 1.268a1 1 0 0 1 .293.707zM2.22 2.22a.75.75 0 0 1 1.06 0l10.5 10.5a.75.75 0 1 1-1.06 1.06L2.22 3.28a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class HeroiconsBellSlash16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
