import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeEmbedIcon],svg[icomoon-free-embed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 11.5l1.5 1.5l5-5l-5-5L9 4.5L12.5 8zm-2-7L5.5 3l-5 5l5 5L7 11.5L3.5 8z"></svg:path>`,
})
export class IcomoonFreeEmbedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
