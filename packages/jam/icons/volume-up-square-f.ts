import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamVolumeUpSquareFIcon],svg[jam-volume-up-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1.12 13.256h1.005l1.824 1.709a2 2 0 0 0 1.367.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.367.542L6.125 6.756H5.121a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm7.877-5.231a1.97 1.97 0 0 1 1.972 1.971v.04a1.97 1.97 0 0 1-1.972 1.972a1 1 0 0 0 0 2a3.97 3.97 0 0 0 3.972-3.972v-.04a3.97 3.97 0 0 0-3.972-3.971a1 1 0 0 0 0 2M13 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6.084-.244l2.205-2.067v6.634l-2.205-2.067H5.121v-2.5z"></svg:path>`,
})
export class JamVolumeUpSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
