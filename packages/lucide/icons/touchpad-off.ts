import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTouchpadOffIcon],svg[lucide-touchpad-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20v-6m7.656 0H22M2 14h12M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5.656 0H20a2 2 0 0 1 2 2v10.344"></svg:path>`,
})
export class LucideTouchpadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
