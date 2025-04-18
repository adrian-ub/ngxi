import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSaveAllIcon],svg[lucide-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 2v3a1 1 0 0 0 1 1h5m2 12v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"></svg:path><svg:path d="M18 22H4a2 2 0 0 1-2-2V6"></svg:path><svg:path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"></svg:path></svg:g>`,
})
export class LucideSaveAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
