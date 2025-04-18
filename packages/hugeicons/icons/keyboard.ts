import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyboardIcon],svg[hugeicons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 7h-5c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 9.57 2 11.212 2 14.5s0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 22 6.212 22 9.5 22h5c3.288 0 4.931 0 6.038-.908q.304-.25.554-.554C22 19.43 22 17.788 22 14.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C19.43 7 17.788 7 14.5 7M12 7V5a1 1 0 0 1 1-1a1 1 0 0 0 1-1V2M7 12h1m3.5 0h1m3.5 0h1M7 17h10" color="currentColor"></svg:path>`,
})
export class HugeiconsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
