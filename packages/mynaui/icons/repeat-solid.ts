import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRepeatSolidIcon],svg[mynaui-repeat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 2.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 0 1-1.05-.15v-2.7H7A3.25 3.25 0 0 0 3.75 10v2a.75.75 0 0 1-1.5 0v-2A4.75 4.75 0 0 1 7 5.25h9.4zm4.6 8.7a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 17 18.75H7.6v2.7a.75.75 0 0 1-1.05.15l-4-3a.75.75 0 0 1 0-1.2l4-3a.75.75 0 0 1 1.05.15v2.7H17A3.25 3.25 0 0 0 20.25 14v-2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiRepeatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
