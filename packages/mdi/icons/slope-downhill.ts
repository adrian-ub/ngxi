import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSlopeDownhillIcon],svg[mdi-slope-downhill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19v3H2v-9zM19.09 7.5l-.84 2.76l-10.12-3A2.89 2.89 0 0 0 5.1 4.5a2.89 2.89 0 0 0-2.76 3.03a2.897 2.897 0 0 0 5.23 1.58l10.12 3l-.84 2.78l4.82-2.6z"></svg:path>`,
})
export class MdiSlopeDownhillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
