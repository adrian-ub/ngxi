import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCircleUpIcon],svg[ci-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-.016-2H12a8 8 0 1 0-.016 0ZM13 17h-2v-6.17l-2.59 2.58L7 12l5-5l5 5l-1.41 1.41L13 10.83V17Z"></svg:path>`,
})
export class CiCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
