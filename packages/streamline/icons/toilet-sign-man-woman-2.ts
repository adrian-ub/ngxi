import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineToiletSignManWoman2Icon],svg[streamline-toilet-sign-man-woman-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2c-2.5 0-2.5 7-2.5 7h5s0-7-2.5-7m-8-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 9c-2.5 0-2.5-7-2.5-7h5s0 7-2.5 7"></svg:path>`,
})
export class StreamlineToiletSignManWoman2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
