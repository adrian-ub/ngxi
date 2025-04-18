import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPineTreeIcon],svg[iconoir-pine-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 2L7 6.643S10.042 7 12 7s5-.357 5-.357zM8.5 7L5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7"></svg:path><svg:path d="M6.5 11.5L3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3"></svg:path></svg:g>`,
})
export class IconoirPineTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
