import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReturn2Icon],svg[streamline-return-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 9.5h9a4 4 0 1 0 0-8h-3"></svg:path><svg:path d="m3.5 6.5l-3 3l3 3"></svg:path></svg:g>`,
})
export class StreamlineReturn2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
