import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSlideIcon],svg[mdi-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.83 15.45c-.36-.55-.65-1.06-.92-1.53c-1.17-2.01-2.12-3.37-4.91-3.79V5.5C9 3.57 7.43 2 5.5 2S2 3.57 2 5.5V22h2v-2h3v2h2v-9.84c1.76.34 2.29 1.23 3.17 2.76c.29.51.61 1.05 1 1.64C15.41 19.92 17.67 22 22 22v-2c-3.47 0-5.2-1.6-7.17-4.55M5.5 4C6.33 4 7 4.67 7 5.5V10H4V5.5C4 4.67 4.67 4 5.5 4M4 18v-2h3v2zm3-4H4v-2h3z"></svg:path>`,
})
export class MdiSlideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
