import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLocateSquareIcon],svg[lucide-lab-locate-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="2"></svg:rect><svg:path d="M12 5V2m7 10h3M12 22v-3M2 12h3"></svg:path></svg:g>`,
})
export class LucideLabLocateSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
