import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUser03Icon],svg[hugeicons-user-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.246 7c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75S7.246 4.38 7.246 7m1.5 0c0-1.79 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25s-1.46 3.25-3.25 3.25S8.746 8.79 8.746 7m-4.5 12c0 1.52 1.23 2.75 2.75 2.75h10c1.52 0 2.75-1.23 2.75-2.75c0-3.17-2.58-5.75-5.75-5.75h-4c-3.17 0-5.75 2.58-5.75 5.75m1.5 0a4.26 4.26 0 0 1 4.25-4.25h4a4.26 4.26 0 0 1 4.25 4.25c0 .69-.56 1.25-1.25 1.25h-10c-.69 0-1.25-.56-1.25-1.25" color="currentColor"></svg:path>`,
})
export class HugeiconsUser03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
