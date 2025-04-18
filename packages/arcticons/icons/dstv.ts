import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDstvIcon],svg[arcticons-dstv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 27.488c7.379 0 9.852-.972 9.852-3.488S11.38 20.512 4 20.512zh16.335c2.233 0 3.646-.692 3.675-1.447c.046-1.19-.995-1.496-3.392-2.039c-2.398-.542-3.468-1.002-3.393-2.039c.054-.754 1.443-1.446 3.676-1.446h7.14m0 2.062v-2.062m10.417 6.85l-3.35-4.789H28.04v3.437a1.35 1.35 0 0 0 1.352 1.352h11.253L44 22.578"></svg:path>`,
})
export class ArcticonsDstvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
