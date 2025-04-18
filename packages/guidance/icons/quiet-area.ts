import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceQuietAreaIcon],svg[guidance-quiet-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 24v-4a2.5 2.5 0 0 0-2.5-2.5h-.5V24m9-4v-1.5A2.5 2.5 0 0 0 18 16h-.5v4v-9.5H17a2.5 2.5 0 0 0-2.5 2.5v8m9 3v-4a2.5 2.5 0 0 0-2.5-2.5h-.708M.5 24v-2.5a4 4 0 0 1 4-4h4v-7h3v-.25l-.063-.1A19 19 0 0 1 8.5 0"></svg:path>`,
})
export class GuidanceQuietAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
