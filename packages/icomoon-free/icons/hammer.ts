import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHammerIcon],svg[icomoon-free-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.781 12.953l-4.712-4.712a.75.75 0 0 0-1.061 0l-.354.354L6.779 5.72L11.499 1h-5l-2.22 2.22l-.22-.22H2.998v1.061l.22.22l-3.22 3.22l2.5 2.5l3.22-3.22l2.875 2.875l-.354.354a.75.75 0 0 0 0 1.061l4.712 4.712a.75.75 0 0 0 1.061 0l1.768-1.768a.75.75 0 0 0 0-1.061z"></svg:path>`,
})
export class IcomoonFreeHammerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
