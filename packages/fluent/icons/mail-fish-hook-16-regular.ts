import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailFishHook16RegularIcon],svg[fluent-mail-fish-hook-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2 1A2 2 0 0 1 10 4.937V7a2 2 0 1 0 4 0h-1.5a.5.5 0 0 1-.354-.854l2-2A.5.5 0 0 1 15 4.5V7a3 3 0 1 1-6 0V4.937A2 2 0 1 1 11.5 3m-5 0H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.535a4 4 0 0 1-1 .409V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.876L7.763 9.44a.5.5 0 0 0 .474 0l.428-.23a4 4 0 0 1-.444-.897l-.22.12L3 5.74V5a1 1 0 0 1 1-1h2.67c-.11-.313-.17-.65-.17-1"></svg:path>`,
})
export class FluentMailFishHook16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
