import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDice3Icon],svg[akar-icons-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M12.25 11.75v.5m-4-4.5v.5m7.5 7.5v.5M8 8h.5m3.5 4h.5m3 4h.5"></svg:path></svg:g>`,
})
export class AkarIconsDice3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
