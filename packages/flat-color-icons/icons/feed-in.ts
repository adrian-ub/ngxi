import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFeedInIcon],svg[flat-color-icons-feed-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="M38 24v12c0 1.1-.9 2-2 2H12c-1.1 0-2-.9-2-2V24c0-3.3-2.7-6-6-6v4c1.1 0 2 .9 2 2v12c0 3.3 2.7 6 6 6h24c3.3 0 6-2.7 6-6V24c0-1.1.9-2 2-2v-4c-3.3 0-6 2.7-6 6"></svg:path><svg:g fill="#3F51B5"><svg:path d="M38.6 5.6L29 15.2V28h4V16.8l8.4-8.4zm-32 2.8l8.4 8.4V28h4V15.2L9.4 5.6z"></svg:path><svg:path d="m37 27l-6 6l-6-6zm-14 0l-6 6l-6-6z"></svg:path></svg:g>`,
})
export class FlatColorIconsFeedInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
