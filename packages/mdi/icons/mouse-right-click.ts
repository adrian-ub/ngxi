import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMouseRightClickIcon],svg[mdi-mouse-right-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07A8.01 8.01 0 0 1 19.75 7c.16.64.25 1.31.25 2zm4.66-2c-.48-1.35-1.43-2.5-2.66-3.19V7zM11 9V1.07C7.06 1.56 4 4.92 4 9zM6.34 20.66A8 8 0 0 1 4 15v-4h16v4c0 2.12-.84 4.16-2.34 5.66A8 8 0 0 1 12 23c-2.12 0-4.16-.84-5.66-2.34"></svg:path>`,
})
export class MdiMouseRightClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
