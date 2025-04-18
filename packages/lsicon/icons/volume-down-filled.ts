import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeDownFilledIcon],svg[lsicon-volume-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.709 2.046A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.825.38L4.815 11H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.315l3.36-2.88a.5.5 0 0 1 .534-.074M14 8.5h-4v-1h4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
