import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilmstripPlay32FilledIcon],svg[fluent-filmstrip-play-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zM26 8a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm1 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M5 9a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm1 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-1 7a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm8-7.95c0-.81.878-1.313 1.576-.905l5.6 3.272a.895.895 0 0 1 0 1.546l-5.6 3.272A1.048 1.048 0 0 1 13 19.331z"></svg:path>`,
})
export class FluentFilmstripPlay32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
