import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGobletCrackIcon],svg[lucide-lab-goblet-crack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 2c-1.78 2.72-3 6.65-3 9a7 7 0 1 0 14 0c0-2.35-1.22-6.28-3-9Zm4 16v4m-4 0h8"></svg:path><svg:path d="m13 11l-1-1l2-2l-3-3l3-3"></svg:path></svg:g>`,
})
export class LucideLabGobletCrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
