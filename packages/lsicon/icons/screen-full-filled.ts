import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenFullFilledIcon],svg[lsicon-screen-full-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 4H9.848V3H13v3.152h-1V4.707L9.354 7.354l-.708-.708zM4 11.293l2.646-2.647l.708.708L4.707 12h1.445v1H3V9.848h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScreenFullFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
