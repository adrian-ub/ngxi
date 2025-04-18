import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltIcon],svg[healthicons-vagina-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148M23.143 42V31.546l-7.022-7.373l1.212-1.273L23 28.85V26a1 1 0 1 1 2 0v2.851l5.667-5.95l1.212 1.272l-7.021 7.373V42z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
