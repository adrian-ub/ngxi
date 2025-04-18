import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFkmIcon],svg[arcticons-fkm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.72 40.5H9.28a1.78 1.78 0 0 1-1.78-1.78V9.28A1.78 1.78 0 0 1 9.28 7.5h29.44a1.78 1.78 0 0 1 1.78 1.78v29.44a1.78 1.78 0 0 1-1.78 1.78M9.28 7.5v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m-29.44 39v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.72 40.5H9.28a1.78 1.78 0 0 1-1.78-1.78V9.28A1.78 1.78 0 0 1 9.28 7.5h29.44a1.78 1.78 0 0 1 1.78 1.78v29.44a1.78 1.78 0 0 1-1.78 1.78M9.28 7.5v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m-29.44 39v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3M40.5 9.28h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3M4.5 9.28h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m8.38-22.56h7.83M14.19 24h5.09m-3.4-7.84l-3.39 15.68m14.59-15.68L23.7 31.84"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.12 31.84L27.36 24l8.13-7.78M27.36 24h-1.97"></svg:path>`,
})
export class ArcticonsFkmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
