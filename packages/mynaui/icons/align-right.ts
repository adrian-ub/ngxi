import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignRightIcon],svg[mynaui-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20h8c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 18.398 17 17.932 17 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 14 14.932 14 14 14m0-10h-4c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 5.602 7 6.068 7 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 10 9.068 10 10 10h4c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 8.398 17 7.932 17 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 4 14.932 4 14 4m7 17V3"></svg:path>`,
})
export class MynauiAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
