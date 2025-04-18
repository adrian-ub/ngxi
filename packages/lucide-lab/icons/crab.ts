import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCrabIcon],svg[lucide-lab-crab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.5 14A6 6 0 1 1 10 2.36L8 5l2 2S7 8 2 8m14.5 6A6 6 0 1 0 14 2.36L16 5l-2 2s3 1 8 1m-12 5v-2m4 2v-2"></svg:path><svg:ellipse cx="12" cy="17.5" rx="7" ry="4.5"></svg:ellipse><svg:path d="M2 16c2 0 3 1 3 1m-3 5c0-1.7 1.3-3 3-3m14-2s1-1 3-1m-3 3c1.7 0 3 1.3 3 3"></svg:path></svg:g>`,
})
export class LucideLabCrabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
