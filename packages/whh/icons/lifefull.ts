import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLifefullIcon],svg[whh-lifefull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 288q0 58-35 154.5T895 629q-35 55-55.5 86.5t-53.5 79t-56 75.5t-53.5 61t-55.5 51t-53.5 30t-55.5 12t-55.5-12.5T403 981t-56-51.5t-54-61.5t-56-75.5t-53.5-78.5t-54.5-85q-62-95-95.5-188.5T0 288Q0 169 84.5 84.5T288 0q67 0 125 28.5t99 78.5q40-50 98.5-78.5T736 0q119 0 203.5 84.5T1024 288"></svg:path>`,
})
export class WhhLifefullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
