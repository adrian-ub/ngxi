import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisSortingIcon],svg[uis-sorting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 17.8l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.3-2.3l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4m-4.4-7.6c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 8.1L9.7 5.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4z"></svg:path>`,
})
export class UisSortingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
