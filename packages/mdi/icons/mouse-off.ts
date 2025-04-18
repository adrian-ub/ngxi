import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMouseOffIcon],svg[mdi-mouse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-1.23-1.21A7.9 7.9 0 0 1 12 23a8 8 0 0 1-8-8v-4h3.73l-2-2H4c0-.54.05-1.07.15-1.58zm9-4.2V9h-.18L5.79 3.96A7.95 7.95 0 0 1 11 1.07M20 11v4c0 .95-.17 1.86-.47 2.71L12.82 11zm-7-9.93c3.94.49 7 3.85 7 7.93h-7z"></svg:path>`,
})
export class MdiMouseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
