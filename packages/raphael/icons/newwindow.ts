import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelNewwindowIcon],svg[raphael-newwindow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.896 5.333V21.25h23.417V5.333zM26.312 18.25H8.896V8.334h17.417v9.916zM4.896 9.542h-3.21V25.46h23.418v-3.21H4.896z"></svg:path>`,
})
export class RaphaelNewwindowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
