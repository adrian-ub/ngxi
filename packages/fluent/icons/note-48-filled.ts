import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote48FilledIcon],svg[fluent-note-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42H26v-9.75A6.25 6.25 0 0 1 32.25 26H42V12.25A6.25 6.25 0 0 0 35.75 6zm29.197 22.5H32.25a3.75 3.75 0 0 0-3.75 3.75v9.197a6.3 6.3 0 0 0 1.848-1.278l9.821-9.82a6.3 6.3 0 0 0 1.278-1.849"></svg:path>`,
})
export class FluentNote48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
