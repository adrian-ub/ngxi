import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMegaphoneIcon],svg[lucide-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 11l18-5v12L3 14zm8.6 5.8a3 3 0 1 1-5.8-1.6"></svg:path>`,
})
export class LucideMegaphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
