import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconControlFilledIcon],svg[lsicon-control-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.95 4a2.5 2.5 0 0 0-4.9 0H2v1h2.05a2.5 2.5 0 0 0 4.9 0H14V4zm-1.9 7H2v1h5.05a2.5 2.5 0 0 0 4.9 0H14v-1h-2.05a2.5 2.5 0 0 0-4.9 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconControlFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
