import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconConsumeFilledIcon],svg[lsicon-consume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2.833-5L8 3.2L5.167 10H3.5v1h2.333L8 5.8l2.167 5.2H12.5v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconConsumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
