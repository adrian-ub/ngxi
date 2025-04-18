import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbDownFilledIcon],svg[lsicon-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.58 2h.443l-.02 9.545l1.089 2.179a.5.5 0 0 0 .447.276h.254a2.5 2.5 0 0 0 2.48-2.81l-.152-1.221h3.303a1.5 1.5 0 0 0 1.482-1.732l-.647-4.124A2.5 2.5 0 0 0 11.79 2zm-.574 7.969L5.023 2H2.5a.5.5 0 0 0-.5.5v6.969a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconThumbDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
