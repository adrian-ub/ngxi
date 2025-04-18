import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabStairsArchIcon],svg[lucide-lab-stairs-arch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 21H3V11a9 9 0 1 1 18 0Z"></svg:path><svg:path d="M20.77 9H12v4m-4 4v-4h13M3 17h18"></svg:path></svg:g>`,
})
export class LucideLabStairsArchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
