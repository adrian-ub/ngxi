import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHookIcon],svg[mdi-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6a3.99 3.99 0 0 1-3 3.86V17a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-5l5 5H7a3 3 0 0 0 3 3a3 3 0 0 0 3-3V9.86c-1.77-.46-3-2.06-3-3.89C10 3.76 11.8 2 14 2c2.22 0 4 1.79 4 4m-4 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiHookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
