import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFullscreenIcon],svg[tdesign-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5h7.5V12h-2V7.914L7.914 17.5H12v2H4.5V12h2v4.086L16.086 6.5H12z"></svg:path>`,
})
export class TdesignFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
