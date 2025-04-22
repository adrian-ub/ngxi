import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDoorClosedLockedIcon],svg[lucide-door-closed-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12h.01M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h8m10-3v-2a2 2 0 1 0-4 0v2"></svg:path><svg:rect width="8" height="5" x="14" y="17" rx="1"></svg:rect></svg:g>`,
})
export class LucideDoorClosedLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
