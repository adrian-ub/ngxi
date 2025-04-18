import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabIroningBoardIcon],svg[lucide-lab-ironing-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3a4 4 0 0 0 0 8h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 18l12-10M6 11l12 10"></svg:path>`,
})
export class LucideLabIroningBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
