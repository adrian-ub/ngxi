import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAddLayer2Icon],svg[streamline-add-layer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 3.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5.5h9a1 1 0 0 1 1 1v9M5.5 6v5M8 8.5H3"></svg:path></svg:g>`,
})
export class StreamlineAddLayer2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
