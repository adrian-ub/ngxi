import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBeanieIcon],svg[streamline-beanie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 10.5h-11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-11 0v-3a5.5 5.5 0 1 1 11 0v3M7 2V.5"></svg:path>`,
})
export class StreamlineBeanieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
