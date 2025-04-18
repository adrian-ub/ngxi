import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLaptopIcon],svg[openmoji-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M63.738 40.98v27.066H11.812V35.958h51.926zm-1.113-5.022h-50V3.891h50z"></svg:path><svg:path fill="#FFF" d="m62.625 36l-50-22.221V3.892l50 22.221z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M62.625 40.98v27.066h-50V40.98m50-5.022h-50V3.891h50zm-45 5.57h40m-40 5.569h40m-40 5.569h40"></svg:path><svg:path d="M30.717 56.186h13.506v8.104H30.717zm31.908-20.228h-50V3.891h50z"></svg:path></svg:g>`,
})
export class OpenmojiLaptopIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
