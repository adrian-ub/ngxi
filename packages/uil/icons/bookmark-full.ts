import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBookmarkFullIcon],svg[uil-bookmark-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1.65.76L12 17.27l5.29 4.44A1 1 0 0 0 18 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 19 21V3a1 1 0 0 0-1-1m-1 16.86l-4.36-3.66a1 1 0 0 0-1.28 0L7 18.86V4h10Z"></svg:path>`,
})
export class UilBookmarkFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
