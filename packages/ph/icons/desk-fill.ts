import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeskFillIcon],svg[ph-desk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M80 112H56a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m56 8a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm64-8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
