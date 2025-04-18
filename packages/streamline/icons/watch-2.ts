import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWatch2Icon],svg[streamline-watch-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 2.5v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1m5 9v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1m6-9h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineWatch2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
