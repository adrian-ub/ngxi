import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsForward01Icon],svg[hugeicons-forward-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.935 12.626c-.254 1.211-1.608 2.082-4.315 3.822c-2.945 1.893-4.417 2.84-5.61 2.475a2.8 2.8 0 0 1-1.088-.635C8 17.418 8 15.612 8 12s0-5.418.922-6.288a2.8 2.8 0 0 1 1.088-.635c1.193-.365 2.665.582 5.61 2.475c2.707 1.74 4.06 2.61 4.315 3.822c.087.412.087.84 0 1.252M4 5v14" color="currentColor"></svg:path>`,
})
export class HugeiconsForward01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
