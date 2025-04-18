import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy2Icon],svg[streamline-galaxy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.987 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 9c3.5 0 6.5-2 6.5-4.5c0-3-6.5-3.5-9-2"></svg:path><svg:path d="M7 5C3.5 5 .5 7 .5 9.5c0 3 6.5 3.5 9 2"></svg:path></svg:g>`,
})
export class StreamlineGalaxy2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
