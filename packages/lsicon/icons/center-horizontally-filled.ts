import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCenterHorizontallyFilledIcon],svg[lsicon-center-horizontally-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h2v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3h2v1h-2v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3H7v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4H1v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCenterHorizontallyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
