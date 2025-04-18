import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBottlePerfumeIcon],svg[lucide-lab-bottle-perfume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3h12v4H6zm3 4h6v4H9z"></svg:path><svg:rect width="18" height="10" x="3" y="11" rx="2"></svg:rect></svg:g>`,
})
export class LucideLabBottlePerfumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
