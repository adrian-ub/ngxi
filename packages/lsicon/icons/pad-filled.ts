import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPadFilledIcon],svg[lsicon-pad-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM13 9.5v-3h-1v3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPadFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
