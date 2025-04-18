import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeUpFilledIcon],svg[lsicon-volume-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.709 2.046A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.825.38L4.815 11H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.315l3.36-2.88a.5.5 0 0 1 .534-.074M11.5 7.5V6h1v1.5H14v1h-1.5V10h-1V8.5H10v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
