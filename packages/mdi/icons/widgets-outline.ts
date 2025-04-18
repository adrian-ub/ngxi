import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWidgetsOutlineIcon],svg[mdi-widgets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.7 4.5l2.8 2.8l-2.8 2.8l-2.8-2.8zM9 5v4H5V5zm10 10v4h-4v-4zM16.7 1.7L11 7.3l5.7 5.7H13v8h8v-8h-4.3l5.6-5.7zM11 3H3v8h8zM9 15v4H5v-4zm2-2H3v8h8z"></svg:path>`,
})
export class MdiWidgetsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
