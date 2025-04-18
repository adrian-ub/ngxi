import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCropIcon],svg[lucide-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 2v14a2 2 0 0 0 2 2h14"></svg:path><svg:path d="M18 22V8a2 2 0 0 0-2-2H2"></svg:path></svg:g>`,
})
export class LucideCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
