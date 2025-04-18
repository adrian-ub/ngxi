import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintbrush2Icon],svg[streamline-paintbrush-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.133 12.056c-1.53 1.54-4.13 2.05-5.63.51c2-2.07 0-3.07 1.5-4.57a2.9 2.9 0 1 1 4.09 4.1z"></svg:path><svg:path d="m4.698 7.082l5.305-5.916c.754-.848 2.115-.89 2.92-.09c.8.805.758 2.166-.09 2.92L6.976 9.241"></svg:path></svg:g>`,
})
export class StreamlinePaintbrush2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
