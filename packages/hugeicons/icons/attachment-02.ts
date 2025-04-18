import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAttachment02Icon],svg[hugeicons-attachment-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-4.5a2.5 2.5 0 0 1 5 0V16" color="currentColor"></svg:path>`,
})
export class HugeiconsAttachment02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
