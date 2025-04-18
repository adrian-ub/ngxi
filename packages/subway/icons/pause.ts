import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPauseIcon],svg[subway-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512h162.9V0H0zM349.1 0v512H512V0z"></svg:path>`,
})
export class SubwayPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
