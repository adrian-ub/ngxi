import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBanknoteXIcon],svg[lucide-banknote-x-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-5 4l5 5m-4-10h.01M22 17l-5 5M6 12h.01"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class LucideBanknoteXIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
