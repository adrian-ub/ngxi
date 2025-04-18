import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsVideoOffSolidIcon],svg[rivet-icons-video-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.293.293l1.414 1.414l-2.51 2.51L16 3.868v8.266l-4-.5V14H3.414l-1.707 1.707l-1.414-1.414zM10.086 2H0v10.086z"></svg:path>`,
})
export class RivetIconsVideoOffSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
