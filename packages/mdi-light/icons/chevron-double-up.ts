import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightChevronDoubleUpIcon],svg[mdi-light-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.84 17.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95zm0-4l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"></svg:path>`,
})
export class MdiLightChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
