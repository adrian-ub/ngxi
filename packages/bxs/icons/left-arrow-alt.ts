import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsLeftArrowAltIcon],svg[bxs-left-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 12l7 6v-5h6v-2h-6V6z"></svg:path>`,
})
export class BxsLeftArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
