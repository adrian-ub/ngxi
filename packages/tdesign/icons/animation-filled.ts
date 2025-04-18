import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimationFilledIcon],svg[tdesign-animation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path fill="currentColor" d="M17.143 15.976a8.5 8.5 0 0 1-9.119-9.118a6.5 6.5 0 1 0 9.119 9.118"></svg:path><svg:path fill="currentColor" d="M12.642 20.476a8.5 8.5 0 0 1-9.118-9.119a6.5 6.5 0 1 0 9.118 9.119"></svg:path>`,
})
export class TdesignAnimationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
