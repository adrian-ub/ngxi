import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImportant32FilledIcon],svg[fluent-important-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8a6 6 0 0 1 12 0c0 3.523-1.986 8.536-3.16 11.19C18.346 20.31 17.227 21 16 21s-2.345-.69-2.84-1.81C11.985 16.536 10 11.522 10 8m6 22a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class FluentImportant32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
