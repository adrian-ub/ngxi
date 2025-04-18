import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTentIcon],svg[mdi-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c0 1.19.39 2.27 1 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c-.61.73-1 1.81-1 3M2 21v-2h2.76L12 4.78L19.24 19H22v2zM12 9.19L7 19h10z"></svg:path>`,
})
export class MdiTentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
