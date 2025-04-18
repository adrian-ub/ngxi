import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiReceptionBellSolidIcon],svg[mynaui-reception-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.25a.75.75 0 0 0 0 1.5h1.25v1.5H10A5.75 5.75 0 0 0 4.25 13v3c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-3A5.75 5.75 0 0 0 14 7.25h-1.25v-1.5H14a.75.75 0 0 0 0-1.5zm-7 14a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiReceptionBellSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
