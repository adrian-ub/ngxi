import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCakeSliceIcon],svg[streamline-cake-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5h-11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-9 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 3h13m-10-7s0-2 1.5-2"></svg:path>`,
})
export class StreamlineCakeSliceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
