import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPieOneFilledIcon],svg[lsicon-pie-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1H8a7 7 0 0 1 7 7v.5H8.5a1 1 0 0 1-1-1zM6.447 2.204a6 6 0 1 0 7.349 7.349l.966.259a7 7 0 1 1-8.574-8.573z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPieOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
