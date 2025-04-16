import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSaveOffIcon],svg[lucide-save-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 13H8a1 1 0 0 0-1 1v7m7-13h1m2 13v-4M2 2l20 20"></svg:path><svg:path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41M29.5 11.5s5 5 4 5M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"></svg:path></svg:g>`,
})
export class LucideSaveOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
