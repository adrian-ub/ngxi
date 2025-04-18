import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGameboyIcon],svg[streamline-gameboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 10.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path><svg:path d="M11.938 12.219a1 1 0 0 1-1 1H3.061a1 1 0 0 1-1-1V1.78a1 1 0 0 1 1-1h7.876a1 1 0 0 1 1 1z"></svg:path><svg:path d="M10.031 7.54H3.969V2.494h6.062zm-4.897 3.812V9.647m-.853.853h1.706"></svg:path></svg:g>`,
})
export class StreamlineGameboyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
