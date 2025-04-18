import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconReplenishmentFilledIcon],svg[lsicon-replenishment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a.5.5 0 0 0-.354.146l-2.5 2.5A.5.5 0 0 0 2 5v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.146-.354l-2.5-2.5A.5.5 0 0 0 11 2zM3.707 4.5l1.5-1.5h5.586l1.5 1.5zm3.793 2v2h-2v1h2v2h1v-2h2v-1h-2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconReplenishmentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
