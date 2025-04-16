import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFlashlightOffIcon],svg[lucide-flashlight-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4m1-4h11v4c0 2-2 2-2 4v1m-5-5h7M2 2l20 20"></svg:path>`,
})
export class LucideFlashlightOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
