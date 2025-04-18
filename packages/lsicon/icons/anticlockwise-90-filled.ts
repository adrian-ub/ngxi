import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAnticlockwise90FilledIcon],svg[lsicon-anticlockwise-90-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.207 4l1.147 1.146l-.708.708L3.293 3.5l2.353-2.354l.708.708L5.207 3H9.5A4.5 4.5 0 0 1 14 7.5V10h-1V7.5A3.5 3.5 0 0 0 9.5 4zM2 7.5h4V14H2v-1h3v-2H2zM5 10V8.5H3V10zm2-2.5h4V14H7zm1 1V13h2V8.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAnticlockwise90FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
