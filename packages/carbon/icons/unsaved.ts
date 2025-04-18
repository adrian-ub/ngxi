import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUnsavedIcon],svg[carbon-unsaved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 19.4L28.6 18L25 21.6L21.4 18L20 19.4l3.6 3.6l-3.6 3.6l1.4 1.4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6z"></svg:path><svg:path fill="currentColor" d="M16 26h-4v-8h4v-2h-4c-1.1 0-2 .9-2 2v8H6V6h4v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6.4l4 4V16h2v-6c0-.3-.1-.5-.3-.7l-5-5c-.2-.2-.4-.3-.7-.3H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10zM12 6h8v4h-8z"></svg:path>`,
})
export class CarbonUnsavedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
