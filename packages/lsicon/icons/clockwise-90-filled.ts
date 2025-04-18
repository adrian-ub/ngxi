import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconClockwise90FilledIcon],svg[lsicon-clockwise-90-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.354 1.146L11.707 3.5L9.354 5.854l-.708-.708L9.793 4H6.5A3.5 3.5 0 0 0 3 7.5V10H2V7.5A4.5 4.5 0 0 1 6.5 3h3.293L8.646 1.854zM5 7.5h4V14H5v-1h3v-2H5zM8 10V8.5H6V10zm2-2.5h4V14h-4zm1 1V13h2V8.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconClockwise90FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
