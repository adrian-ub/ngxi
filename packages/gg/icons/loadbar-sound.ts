import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarSoundIcon],svg[gg-loadbar-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6h2v12h-2zm-4 7h2v5H7zm8-4h2v9h-2z"></svg:path>`,
})
export class GgLoadbarSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
