import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailFishHook16FilledIcon],svg[fluent-mail-fish-hook-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2 1A2 2 0 0 1 10 4.937V7a2 2 0 1 0 4 0h-1.5a.5.5 0 0 1-.354-.854l2-2A.5.5 0 0 1 15 4.5V7a3 3 0 1 1-6 0V4.937A2 2 0 1 1 11.5 3m-5 0H4a2 2 0 0 0-2 2v.201l6 3.231l.22-.119A4 4 0 0 1 8 7V5.599A3 3 0 0 1 6.5 3m2.165 6.21A3.996 3.996 0 0 0 14 10.465V11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.337L7.763 9.44a.5.5 0 0 0 .474 0z"></svg:path>`,
})
export class FluentMailFishHook16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
