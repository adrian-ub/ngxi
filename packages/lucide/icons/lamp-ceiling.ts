import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLampCeilingIcon],svg[lucide-lamp-ceiling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2v5m2.829 8.998a3 3 0 1 1-5.658 0"></svg:path><svg:path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"></svg:path></svg:g>`,
})
export class LucideLampCeilingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
