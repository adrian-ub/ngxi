import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLayoutListMoveIcon],svg[lucide-lab-layout-list-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 7L6 3L2 7m4-4v18m-4-4l4 4l4-4m4-13h7m-7 5h7m-7 6h7m-7 5h7"></svg:path>`,
})
export class LucideLabLayoutListMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
