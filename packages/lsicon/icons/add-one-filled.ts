import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAddOneFilledIcon],svg[lsicon-add-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 7.5V3h1v4.5H13v1H8.5V13h-1V8.5H3v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
