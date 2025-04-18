import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTagsIcon],svg[vaadin-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H7.5l7 7l-5.3 5.2l.8.8l6-6z"></svg:path><svg:path fill="currentColor" d="M6 2H0v6l7 7l6-6zM2.8 6c-.7 0-1.3-.6-1.3-1.2s.6-1.2 1.2-1.2S4 4.1 4 4.8S3.4 6 2.8 6"></svg:path>`,
})
export class VaadinTagsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
