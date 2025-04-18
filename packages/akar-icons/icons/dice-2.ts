import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDice2Icon],svg[akar-icons-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M8.25 7.75v.5m7.5 7.5v.5M8 8h.5m7 8h.5"></svg:path></svg:g>`,
})
export class AkarIconsDice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
