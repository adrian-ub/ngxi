import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYSolidIcon],svg[mynaui-letter-y-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4a1 1 0 1 0-1.6 1.2l3.55 4.733V17a1 1 0 1 0 2 0v-4.667L16.3 7.6a1 1 0 0 0-1.6-1.2l-2.95 3.933z"></svg:path>`,
})
export class MynauiLetterYSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
