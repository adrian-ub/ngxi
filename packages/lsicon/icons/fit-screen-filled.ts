import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFitScreenFilledIcon],svg[lsicon-fit-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5H4v1H2v2H1zM12 3h2.5a.5.5 0 0 1 .5.5V6h-1V4h-2zM3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zM2 12v-2H1v2.5a.5.5 0 0 0 .5.5H4v-1zm13-2v2.5a.5.5 0 0 1-.5.5H12v-1h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFitScreenFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
