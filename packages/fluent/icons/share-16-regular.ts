import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShare16RegularIcon],svg[fluent-share-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.307 2.105A.5.5 0 0 0 9.5 2.5v1.993l-.135.007a5.4 5.4 0 0 0-1.544.337a4.7 4.7 0 0 0-2.095 1.574c-.623.826-1.081 1.972-1.224 3.544a.5.5 0 0 0 .852.399c1.188-1.19 2.369-1.776 3.242-2.067c.36-.12.668-.19.904-.23V10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0-.025-.769zm-.364 3.392h.003A.5.5 0 0 0 10.5 5V3.522l3.219 2.504l-3.219 2.86V7.5A.5.5 0 0 0 10 7h-.045l-.1.006a5 5 0 0 0-.355.038c-.3.043-.72.127-1.22.294a8.9 8.9 0 0 0-2.548 1.36c.194-.716.476-1.264.793-1.685a3.7 3.7 0 0 1 1.654-1.242A4.4 4.4 0 0 1 9.82 5.49q.068.002.1.005zM4.5 3A2.5 2.5 0 0 0 2 5.5v6A2.5 2.5 0 0 0 4.5 14h6a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 3 11.5v-6A1.5 1.5 0 0 1 4.5 4h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentShare16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
