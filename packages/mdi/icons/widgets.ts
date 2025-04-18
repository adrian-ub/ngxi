import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWidgetsIcon],svg[mdi-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v4.34l5.66-5.65l5.65 5.65L16.66 13H21v8h-8v-8h3.66L11 7.34V11H3zm0 10h8v8H3z"></svg:path>`,
})
export class MdiWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
