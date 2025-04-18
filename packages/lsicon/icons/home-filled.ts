import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHomeFilledIcon],svg[lsicon-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.268 2.078a.5.5 0 0 0-.536 0l-5.5 3.5A.5.5 0 0 0 2 6v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.232-.422zM5 11h6v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHomeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
