import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWheelchairIcon],svg[mynaui-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.449 16.4A4.802 4.802 0 0 1 5 15.2a4.8 4.8 0 0 1 2.8-4.365"></svg:path><svg:path d="m9.8 7.2l.695 6.258a1 1 0 0 0 1.051.888l5.044-.288a1 1 0 0 1 1.056.953l.11 2.434a1 1 0 0 0 1 .955H19"></svg:path><svg:path d="M11.2 5.6a1.6 1.6 0 1 1-3.2 0a1.6 1.6 0 0 1 3.2 0m1.55 4.8h3"></svg:path></svg:g>`,
})
export class MynauiWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
