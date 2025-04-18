import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsHeartIcon],svg[pepicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 5.722c1.69-3.023 7.5-1.968 7.5 2.4c0 2.918-2.5 5.582-7.5 7.993c-5-2.41-7.5-5.075-7.5-7.993c0-4.368 5.81-5.423 7.5-2.4Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsHeartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
