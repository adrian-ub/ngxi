import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8StrikethroughIcon],svg[icons8-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v2h8v8h-5v2h5v8h2v-8h5v-2h-5V8h8V6z"></svg:path>`,
})
export class Icons8StrikethroughIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
