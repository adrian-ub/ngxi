import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeEmbed2Icon],svg[icomoon-free-embed2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 11.5l1.5 1.5l5-5l-5-5L13 4.5L16.5 8zm-6-7L5.5 3l-5 5l5 5L7 11.5L3.5 8zm3.958-2.148l1.085.296l-3 11l-1.085-.296z"></svg:path>`,
})
export class IcomoonFreeEmbed2Icon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
