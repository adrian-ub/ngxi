import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAspectRatioIcon],svg[zmdi-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 149v43h-43v-43zm0 86v42h-43v-42zm-171-86v43H85v-43zm85 0v43h-42v-43zM384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiAspectRatioIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
