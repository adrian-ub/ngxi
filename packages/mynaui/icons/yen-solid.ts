import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiYenSolidIcon],svg[mynaui-yen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.568 2.887a.75.75 0 0 1 1.045.18L12 10.7l5.387-7.633a.75.75 0 0 1 1.226.866l-5.165 7.317h4.007a.75.75 0 0 1 0 1.5H12.75v2.75h4.705a.75.75 0 0 1 0 1.5H12.75v3.5a.75.75 0 0 1-1.5 0V17H6.546a.75.75 0 0 1 0-1.5h4.704v-2.75H6.546a.75.75 0 0 1 0-1.5h4.007L5.387 3.933a.75.75 0 0 1 .18-1.046"></svg:path>`,
})
export class MynauiYenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
