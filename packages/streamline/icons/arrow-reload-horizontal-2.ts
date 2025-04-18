import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal2Icon],svg[streamline-arrow-reload-horizontal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 8.5L7 10.75L9.25 13m-4.5-7.5L7 3.25L4.75 1"></svg:path><svg:path d="M7 10.75h4.5a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2H10m-3 0H2.5a2 2 0 0 0-2 2v3.5a2 2 0 0 0 2 2H4"></svg:path></svg:g>`,
})
export class StreamlineArrowReloadHorizontal2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
