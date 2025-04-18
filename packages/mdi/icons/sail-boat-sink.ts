import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSailBoatSinkIcon],svg[mdi-sail-boat-sink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.96 21c-1.06 0-2.06-.26-3-.76c-1.84 1-4.15 1-5.99 0c-1.84 1-4.15 1-5.97 0c-1.23.69-2.64.8-4 .76v-2c1.41.04 2.77-.11 4-1c1.74 1.24 4.21 1.24 5.97 0c1.77 1.24 4.23 1.24 5.99 0c1.21.89 2.58 1.04 3.98 1v2zM22 3.5L7.11 5.96l6 6.21zM10.81 16.36l1.16-.82l1.15.82c.53.36 1.18.57 1.85.57c.15 0 .31-.02.46-.04L5.2 6.31C4.29 7.65 3.9 9.32 4 10.92l5.74 5.91c.39-.09.76-.25 1.07-.47"></svg:path>`,
})
export class MdiSailBoatSinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
