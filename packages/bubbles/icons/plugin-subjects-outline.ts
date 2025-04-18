import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginSubjectsOutlineIcon],svg[bubbles-plugin-subjects-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.5 4.644a31 31 0 0 1 4.732-.394a.52.52 0 0 1 .478.307a.5.5 0 0 1 .04.193v15.768a.505.505 0 0 1-.5.5c-8.293.103-10.75 2.732-10.75 2.732V6.982S10.045 4.356 1.768 4.25a.5.5 0 0 0-.518.5v15.768a.505.505 0 0 0 .5.5c8.293.103 10.75 2.732 10.75 2.732"></svg:path><svg:path d="M12.5 23.257a6.04 6.04 0 0 1 1.636-3.448a8.23 8.23 0 0 1 4.364-2.463V1.743a.48.48 0 0 0-.228-.4a.6.6 0 0 0-.494-.066a7.8 7.8 0 0 0-3.642 2.277A6.04 6.04 0 0 0 12.5 7"></svg:path></svg:g>`,
})
export class BubblesPluginSubjectsOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
