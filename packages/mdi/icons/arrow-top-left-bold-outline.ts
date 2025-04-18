import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopLeftBoldOutlineIcon],svg[mdi-arrow-top-left-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.12 8.46l5.66 5.66l-5.66 5.66l-5.66-5.66l-4.24 4.24V4.22h14.14zm-7.78 4.95l2.12-2.12l5.66 5.66l2.83-2.83l-5.66-5.65l2.12-2.13H6.34z"></svg:path>`,
})
export class MdiArrowTopLeftBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
