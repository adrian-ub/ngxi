import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconConstituteFilledIcon],svg[lsicon-constitute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM8 13h2V7.5H8zm3-5.5V13h2V7.5zm-8 1V3h4v5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconConstituteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
