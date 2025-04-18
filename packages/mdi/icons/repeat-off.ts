import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRepeatOffIcon],svg[mdi-repeat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3-3H7v3l-4-4l4-4v3h6.73L7 10.27V11H5V8.27zM17 13h2v4.18l-2-2zm0-8V2l4 4l-4 4V7H8.82l-2-2z"></svg:path>`,
})
export class MdiRepeatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
