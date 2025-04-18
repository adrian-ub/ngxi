import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInLightIcon],svg[lets-icons-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="M3 9v6c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9"></svg:path><svg:path fill="currentColor" d="M15 15v.5h.5V15zM7.354 6.646a.5.5 0 1 0-.708.708zM14.5 8v7h1V8zm.5 6.5H8v1h7zm.354.146l-8-8l-.708.708l8 8z"></svg:path></svg:g>`,
})
export class LetsIconsInLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
