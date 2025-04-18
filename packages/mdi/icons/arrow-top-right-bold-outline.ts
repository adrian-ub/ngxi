import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopRightBoldOutlineIcon],svg[mdi-arrow-top-right-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.64 4.22h14.14v14.14l-4.24-4.24l-5.66 5.66l-5.66-5.66l5.66-5.66zm12.02 2.12h-7.07l2.12 2.12l-5.66 5.66l2.83 2.83l5.66-5.66l2.12 2.12z"></svg:path>`,
})
export class MdiArrowTopRightBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
