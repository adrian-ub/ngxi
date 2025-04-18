import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMoveUpLeftIcon],svg[lucide-move-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11V5h6M5 5l14 14"></svg:path>`,
})
export class LucideMoveUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
