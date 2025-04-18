import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQSolidIcon],svg[mynaui-letter-q-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.462 6A3.466 3.466 0 0 0 7 9.47v4.942a3.466 3.466 0 0 0 3.461 3.47h4.508l.323.324a1 1 0 0 0 1.416-1.412l-.323-.325V9.471A3.466 3.466 0 0 0 12.923 6zM9 9.47C9 8.656 9.658 8 10.461 8h2.462c.804 0 1.462.655 1.462 1.47v4.992l-.753-.756a1 1 0 1 0-1.417 1.412l.762.764H10.46A1.466 1.466 0 0 1 9 14.412z"></svg:path>`,
})
export class MynauiLetterQSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
