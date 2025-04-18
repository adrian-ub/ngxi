import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalendar1Icon],svg[si-glyph-calendar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13 .031V1h-2V.031H5V1H3V.031H0V16h16V.031zm1.029 13.977H1.955v-9.07h12.074z"></svg:path><svg:path d="M6.027 7.957h-.98v-.941h1.902v4.938h-.922zm4 0H9v-.941h1.953v4.938h-.926z"></svg:path></svg:g>`,
})
export class SiGlyphCalendar1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
