import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJtxBoardIcon],svg[arcticons-jtx-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-1.116 13.995l-7.799 10.334m7.799 0l-7.799-10.334"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.97 16.05v11.7c0 1.17.78 1.95 1.95 1.95h.585m-4.484-10.334h4.094m-7.869-.296v11.7a3.91 3.91 0 0 1-3.9 3.899h0c-.975 0-1.95-.39-2.73-1.17"></svg:path><svg:circle cx="17.245" cy="14.391" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsJtxBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
