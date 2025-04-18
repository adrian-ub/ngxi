import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabKiwiIcon],svg[lucide-lab-kiwi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 6v1m3 2l1-1m1 4h1m-3 3l1 1m-4 1v1m-4-2l1-1m-3-3h1m1-4l1 1"></svg:path></svg:g>`,
})
export class LucideLabKiwiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
