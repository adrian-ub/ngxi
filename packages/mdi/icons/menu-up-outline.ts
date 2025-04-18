import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMenuUpOutlineIcon],svg[mdi-menu-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16v-1.5l-6-6l-6 6V16zm-6-4.67L14.67 14H9.33z"></svg:path>`,
})
export class MdiMenuUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
