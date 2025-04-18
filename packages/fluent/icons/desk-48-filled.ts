import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk48FilledIcon],svg[fluent-desk-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 8A4.25 4.25 0 0 0 4 12.25V16h37.5v22.75a1.25 1.25 0 1 0 2.5 0v-26.5A4.25 4.25 0 0 0 39.75 8zM24 18.5H4v15.25A6.25 6.25 0 0 0 10.25 40h7.5A6.25 6.25 0 0 0 24 33.75zm-14 6.75c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class FluentDesk48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
