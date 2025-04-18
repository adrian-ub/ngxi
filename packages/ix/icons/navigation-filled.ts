import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNavigationFilledIcon],svg[ix-navigation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M277.334 384h-42.667v42.667h42.667zm85.333-234.666L224 224l-74.666 138.667L288 288zM256 234.667c11.782 0 21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334s9.551-21.333 21.333-21.333m170.667 0H384v42.667h42.667zm-298.667 0H85.334v42.667H128zM277.334 85.334h-42.667V128h42.667z"></svg:path>`,
})
export class IxNavigationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
