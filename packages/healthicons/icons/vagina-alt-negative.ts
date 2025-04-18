import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltNegativeIcon],svg[healthicons-vagina-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsVaginaAltNegative0)"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-6 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148" clip-rule="evenodd"></svg:path><svg:path d="M23.143 31.546V42h1.715V31.546l7.022-7.373l-1.213-1.273l-6.667 7l-6.667-7l-1.212 1.273z"></svg:path><svg:path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVaginaAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVaginaAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
