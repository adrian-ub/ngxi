import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMicOffIcon],svg[lucide-mic-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 2l20 20m-3.11-8.77A7 7 0 0 0 19 12v-2M5 10v2a7 7 0 0 0 12 5m-2-7.66V5a3 3 0 0 0-5.68-1.33"></svg:path><svg:path d="M9 9v3a3 3 0 0 0 5.12 2.12M12 19v3"></svg:path></svg:g>`,
})
export class LucideMicOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
