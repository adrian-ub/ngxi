import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler32FilledIcon],svg[fluent-ruler-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.5A3.5 3.5 0 0 1 12.5 2h7A3.5 3.5 0 0 1 23 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-7q-.363 0-.705-.071A3.5 3.5 0 0 1 9 26.5zm2 .5v2h3a1 1 0 1 0 0-2zm0 4.5v2h5a1 1 0 1 0 0-2zm0 4.5v2h3a1 1 0 1 0 0-2zm0 4.5v2h5a1 1 0 1 0 0-2zm0 4.5v2h3a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentRuler32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
