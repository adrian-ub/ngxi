import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRowsSolidIcon],svg[mynaui-rows-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.75A1.75 1.75 0 0 0 2.25 6.5v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 4.75zm0 8a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 12.75z"></svg:path>`,
})
export class MynauiRowsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
