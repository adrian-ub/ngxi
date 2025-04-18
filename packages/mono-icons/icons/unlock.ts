import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsUnlockIcon],svg[mono-icons-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-1.648 0-3 1.352-3 3v3h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7c0-2.752 2.248-5 5-5s5 2.248 5 5a1 1 0 1 1-2 0c0-1.648-1.352-3-3-3m-6 8v8h12v-8z"></svg:path>`,
})
export class MonoIconsUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
