import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayers2Icon],svg[streamline-layers-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 1.5h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path d="M11 10H4a1 1 0 0 1-1-1V4"></svg:path><svg:path d="M9 12.5H1.5a1 1 0 0 1-1-1V6"></svg:path></svg:g>`,
})
export class StreamlineLayers2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
