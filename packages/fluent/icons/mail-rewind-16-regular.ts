import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRewind16RegularIcon],svg[fluent-mail-rewind-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 6.999V5.8l2.36 1.966a1 1 0 0 0 1.64-.768V2.002a1 1 0 0 0-1.64-.768L11.998 3.2V2.002a1 1 0 0 0-1.64-.768L7.36 3.732a1 1 0 0 0 0 1.537l2.998 2.498a1 1 0 0 0 1.64-.768m-3.76 3.441l2.672-1.439a1.97 1.97 0 0 1-1.192-.466l-.02-.017L8 9.432L3 6.74V6a1 1 0 0 1 1-1h2.063a2 2 0 0 1 0-1H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.734a2 2 0 0 1-.283-.199L13 7.937V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.876l4.763 2.564a.5.5 0 0 0 .474 0"></svg:path>`,
})
export class FluentMailRewind16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
