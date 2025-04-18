import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsVAltIcon],svg[gg-arrows-v-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 6.455L7.757 5.041L12 .798l4.243 4.243l-1.415 1.414L13 4.627v14.746l1.828-1.828l1.415 1.414L12 23.202l-4.243-4.243l1.415-1.414L11 19.373V4.627z"></svg:path>`,
})
export class GgArrowsVAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
