import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabStairsArrowUpRightIcon],svg[lucide-lab-stairs-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 11l9-9M8 2h4v4M2 20h5v-5h5v-5h5V5h5"></svg:path>`,
})
export class LucideLabStairsArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
