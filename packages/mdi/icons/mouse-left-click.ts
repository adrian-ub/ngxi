import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMouseLeftClickIcon],svg[mdi-mouse-left-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9V1.07c3.94.49 7 3.85 7 7.93zM6.34 20.66A8 8 0 0 1 4 15v-4h16v4c0 2.12-.84 4.16-2.34 5.66A8 8 0 0 1 12 23c-2.12 0-4.16-.84-5.66-2.34M11 9V1.07A8.01 8.01 0 0 0 4.25 7C4.09 7.64 4 8.31 4 9zM6.34 7C6.82 5.65 7.78 4.5 9 3.81V7z"></svg:path>`,
})
export class MdiMouseLeftClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
