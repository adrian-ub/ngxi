import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMessengerIcon],svg[jam-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.683 16.418C1.436 14.722 0 12.14 0 9.248C0 4.14 4.477 0 10 0s10 4.14 10 9.248s-4.477 9.248-10 9.248a10.8 10.8 0 0 1-2.96-.412l-3.357 1.891zm5.25-9.703l-5.394 5.66l4.908-2.67l2.565 2.67l5.362-5.66l-4.853 2.622l-2.589-2.622z"></svg:path>`,
})
export class JamMessengerIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
