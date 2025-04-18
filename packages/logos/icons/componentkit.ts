import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosComponentkitIcon],svg[logos-componentkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#39BCD3" d="m92.748 135.605l77.82 77.82L127.991 256l-77.82-77.82zm120.677-50.188L256 127.992l-77.82 77.82l-42.575-42.575zM128.008 0l42.575 42.575L42.575 170.583L0 128.008z"></svg:path>`,
})
export class LogosComponentkitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
