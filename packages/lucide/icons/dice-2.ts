import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDice2Icon],svg[lucide-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2"></svg:rect><svg:path d="M15 9h.01M9 15h.01"></svg:path></svg:g>`,
})
export class LucideDice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
