import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabShirtFoldedButtonsIcon],svg[lucide-lab-shirt-folded-buttons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 21H5a2 2 0 0 1-2-2V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v15a2 2 0 1 0 4 0V7c0-.6-.4-1-1-1h-3"></svg:path><svg:path d="M7 3v1a3 3 0 1 0 6 0V3m-3 8h.01M10 15h.01"></svg:path></svg:g>`,
})
export class LucideLabShirtFoldedButtonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
