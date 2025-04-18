import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapSimpleOffIcon],svg[majesticons-map-simple-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.782 5.61L2.445 7.168A1 1 0 0 0 2 8v12a1 1 0 0 0 1.555.832L9 17.202l5.445 3.63a1 1 0 0 0 1.11 0l2.67-1.78L4.781 5.61zm16.834 11.178A1 1 0 0 0 22 16V4a1 1 0 0 0-1.555-.832L15 6.798l-5.445-3.63a1 1 0 0 0-1.11 0l-.269.18z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsMapSimpleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
