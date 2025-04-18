import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoControllerStopIcon],svg[entypo-controller-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.995v9.808c0 .661-.536 1.197-1.196 1.197H4.997A.997.997 0 0 1 4 15.003V5.196C4 4.536 4.536 4 5.196 4h9.808c.55 0 .996.446.996.995"></svg:path>`,
})
export class EntypoControllerStopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
