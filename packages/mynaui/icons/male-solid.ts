import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMaleSolidIcon],svg[mynaui-male-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.25a.75.75 0 0 0 0 1.5h2.185l-3.982 3.968a6.75 6.75 0 1 0 1.063 1.059l3.984-3.97V8a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiMaleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
