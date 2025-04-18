import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrangeIcon],svg[hugeicons-arrange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h2A1.5 1.5 0 0 1 8 4.5v2A1.5 1.5 0 0 1 6.5 8h-2A1.5 1.5 0 0 1 3 6.5zm0 13A1.5 1.5 0 0 1 4.5 16h2A1.5 1.5 0 0 1 8 17.5v2A1.5 1.5 0 0 1 6.5 21h-2A1.5 1.5 0 0 1 3 19.5zm5 1h13m-5-13H8m8.323 2.176l-8.675 8.675M16 4.5A1.5 1.5 0 0 1 17.5 3h2A1.5 1.5 0 0 1 21 4.5v2A1.5 1.5 0 0 1 19.5 8h-2A1.5 1.5 0 0 1 16 6.5zM18 21l1.388-.946C20.463 19.32 21 18.955 21 18.5s-.537-.821-1.612-1.554L18 16" color="currentColor"></svg:path>`,
})
export class HugeiconsArrangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
