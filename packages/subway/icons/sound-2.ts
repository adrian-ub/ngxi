import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySound2Icon],svg[subway-sound-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m376.1 177.3l-16.4 39.4c15.4 6.4 26.2 21.6 26.2 39.4c0 17.7-10.8 32.9-26.2 39.4l16.4 39.4c30.8-12.9 52.5-43.3 52.5-78.8c.1-35.6-21.6-66-52.5-78.8m-288.8-28v213.3h85.3L322 512V0L172.7 149.3z"></svg:path>`,
})
export class SubwaySound2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
