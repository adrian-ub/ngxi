import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightChevronDoubleRightIcon],svg[mdi-light-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.59 6.84l5.66 5.66l-5.66 5.66l-.7-.71l4.95-4.95l-4.95-4.95zm4 0l5.66 5.66l-5.66 5.66l-.7-.71l4.95-4.95l-4.95-4.95z"></svg:path>`,
})
export class MdiLightChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
