import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNecktieIcon],svg[streamline-necktie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 3.5h-3l-.561-1.684A1 1 0 0 1 5.887.5h2.226a1 1 0 0 1 .948 1.316zm0 0l1 7.5L7 13.5L4.5 11l1-7.5"></svg:path>`,
})
export class StreamlineNecktieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
