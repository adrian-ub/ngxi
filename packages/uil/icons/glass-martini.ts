import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGlassMartiniIcon],svg[uil-glass-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h-5v-5.06A9 9 0 0 0 21 6a8.7 8.7 0 0 0-.67-3.39a1 1 0 0 0-.22-.32L20 2.21a1 1 0 0 0-.21-.13a1 1 0 0 0-.28-.08H4.5a1 1 0 0 0-.29.06A2 2 0 0 0 4 2.2l-.12.09a1 1 0 0 0-.22.32A8.7 8.7 0 0 0 3 6a9 9 0 0 0 8 8.94V20H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2M5 6a7 7 0 0 1 .29-2h13.42A7 7 0 0 1 19 6A7 7 0 0 1 5 6"></svg:path>`,
})
export class UilGlassMartiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
