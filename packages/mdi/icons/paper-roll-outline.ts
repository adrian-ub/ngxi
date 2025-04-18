import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPaperRollOutlineIcon],svg[mdi-paper-roll-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3C5.69 3 3.14 5.69 3 9v12h9v-7.54c1.1.99 2.5 1.54 4 1.54c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 2h2.54C10.55 6.1 10 7.5 10 9v3H9v1h1v6H5v-6h1v-1H5V9c0-2.21 1.79-4 4-4m7 0c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 2.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75s1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75M7 12v1h1v-1z"></svg:path>`,
})
export class MdiPaperRollOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
