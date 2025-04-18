import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSpiderWebIcon],svg[lucide-lab-spider-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 17.2V6.8L12 2L3 6.8v10.4l9 4.8Zm-19 .6L22 6.2m-20 0l20 11.6M12 2v20"></svg:path><svg:path d="M17 14.9V9.1l-5-2.6l-5 2.6v5.8l5 2.6Z"></svg:path></svg:g>`,
})
export class LucideLabSpiderWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
