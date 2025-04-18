import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTextFilledIcon],svg[lsicon-text-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4H4v1H3V3h10v2h-1V4H8.5v8H10v1H6v-1h1.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTextFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
