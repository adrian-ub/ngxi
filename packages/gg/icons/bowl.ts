import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBowlIcon],svg[gg-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.547 3.672a1 1 0 0 0-1.414 0l-5.364 5.364H2v2h.008c.218 5.33 4.608 9.585 9.992 9.585s9.774-4.255 9.992-9.585H22v-2h-5.403l3.95-3.95a1 1 0 0 0 0-1.414m-6.37 7.364h5.813a8 8 0 0 1-15.98 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgBowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
