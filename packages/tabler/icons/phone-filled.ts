import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhoneFilledIcon],svg[tabler-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a1 1 0 0 1 .877.519l.051.11l2 5a1 1 0 0 1-.313 1.16l-.1.068l-1.674 1.004l.063.103a10 10 0 0 0 3.132 3.132l.102.062l1.005-1.672a1 1 0 0 1 1.113-.453l.115.039l5 2a1 1 0 0 1 .622.807L21 15v4c0 1.657-1.343 3-3.06 2.998C9.361 21.477 2.522 14.638 2 6a3 3 0 0 1 2.824-2.995L5 3z"></svg:path>`,
})
export class TablerPhoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
