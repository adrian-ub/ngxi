import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMongodbIcon],svg[lineicons-mongodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.74 4.23a35 35 0 0 1-1.713-2.216a.033.033 0 0 0-.054 0a35 35 0 0 1-1.713 2.217c-7.212 9.187 1.138 15.385 1.138 15.385l.067.047c.064.959.221 2.337.221 2.337h.628s.157-1.372.22-2.33l.069-.054s8.349-6.198 1.138-15.385M12 19.482s-.374-.32-.475-.48l-.001-.016l.453-10.002a.024.024 0 0 1 .047 0l.452 10.002v.017c-.101.16-.476.48-.476.48"></svg:path>`,
})
export class LineiconsMongodbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
