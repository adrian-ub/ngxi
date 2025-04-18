import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDevcontainerIcon],svg[catppuccin-devcontainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M1.5 4v8L8 14.5l6.5-2.5V4L8 1.5Z"></svg:path><svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M4.5 5.5L8 7l3.5-1.5M8 7v4"></svg:path>`,
})
export class CatppuccinDevcontainerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
