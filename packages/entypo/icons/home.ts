import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoHomeIcon],svg[entypo-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312c.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749"></svg:path>`,
})
export class EntypoHomeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
