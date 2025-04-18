import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTabletSolidIcon],svg[mynaui-tablet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 4.8c0-1.565 1.536-2.55 3.036-2.55h11.428c1.5 0 3.036.985 3.036 2.55v14.4c0 1.565-1.536 2.55-3.036 2.55H6.286c-1.5 0-3.036-.985-3.036-2.55zm7.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiTabletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
