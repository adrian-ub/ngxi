import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightChevronDoubleLeftIcon],svg[mdi-light-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.41 18.16l-5.66-5.66l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95zm-4 0L6.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95z"></svg:path>`,
})
export class MdiLightChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
