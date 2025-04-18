import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalCenterFilledIcon],svg[lsicon-vertical-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3V1h1v2h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4v2h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3v2h-1v-2h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3V7h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVerticalCenterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
