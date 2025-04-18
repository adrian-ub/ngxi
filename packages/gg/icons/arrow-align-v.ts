import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowAlignVIcon],svg[gg-arrow-align-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11v2h10v-2zm.757 7l1.415-1.414L11 18.414V14h2v4.414l1.828-1.828L16.243 18L12 22.243zm8.486-12l-1.414 1.414L13 5.586V10h-2V5.586L9.172 7.414L7.757 6L12 1.757z"></svg:path>`,
})
export class GgArrowAlignVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
