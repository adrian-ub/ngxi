import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageBorder48FilledIcon],svg[fluent-image-border-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.348 25.098L14.5 31.947V14.5h19v17.447l-6.848-6.849a3.75 3.75 0 0 0-5.304 0M29 16.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.116 10.366l6.634 6.634H16.482l6.634-6.634a1.25 1.25 0 0 1 1.768 0M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zm7.25-.25c-.69 0-1.25.56-1.25 1.25v21.5c0 .69.56 1.25 1.25 1.25h21.5c.69 0 1.25-.56 1.25-1.25v-21.5c0-.69-.56-1.25-1.25-1.25z"></svg:path>`,
})
export class FluentImageBorder48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
