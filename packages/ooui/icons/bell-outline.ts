import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBellOutlineIcon],svg[ooui-bell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2.19C14.09 2.86 16 5.2 16 8v6l2 2v1H2v-1l2-2V8c0-2.8 1.91-5.14 4.5-5.81V1.5C8.5.67 9.17 0 10 0s1.5.67 1.5 1.5zM10 4C7.79 4 6 5.79 6 8v7h8V8c0-2.21-1.79-4-4-4M8 18h4c0 1.1-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class OouiBellOutlineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
