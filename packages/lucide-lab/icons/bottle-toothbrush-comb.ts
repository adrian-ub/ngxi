import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBottleToothbrushCombIcon],svg[lucide-lab-bottle-toothbrush-comb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 3h4v4H2zm4 4v2c0 .6.1 1.4.2 2L8 20.8v.2c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7m12-5v7l-2 5v8"></svg:path><svg:path d="M10 3h4v6h-4zm8 3h4m-4 4h4m-4 4h4m-4 4h4M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2"></svg:path></svg:g>`,
})
export class LucideLabBottleToothbrushCombIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
