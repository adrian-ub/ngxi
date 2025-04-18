import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageBorder48RegularIcon],svg[fluent-image-border-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 16.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M13.25 12c-.69 0-1.25.56-1.25 1.25v21.5c0 .69.56 1.25 1.25 1.25h21.5c.69 0 1.25-.56 1.25-1.25v-21.5c0-.69-.56-1.25-1.25-1.25zm8.098 13.098L14.5 31.947V14.5h19v17.447l-6.848-6.849a3.75 3.75 0 0 0-5.304 0m3.536 1.768l6.634 6.634H16.482l6.634-6.634a1.25 1.25 0 0 1 1.768 0M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v23.5a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75z"></svg:path>`,
})
export class FluentImageBorder48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
