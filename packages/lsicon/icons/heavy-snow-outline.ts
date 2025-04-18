import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHeavySnowOutlineIcon],svg[lsicon-heavy-snow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 1v14m2-13L8 4L6 2m4 12l-2-2l-2 2m8.062-9.5l-12.124 7m12.258-4.768L11.464 6l.732-2.732m-8.392 9.464L4.536 10l-2.732-.732M14.062 11.5l-12.124-7m10.258 8.232L11.464 10l2.732-.732M1.804 6.732L4.536 6l-.732-2.732"></svg:path>`,
})
export class LsiconHeavySnowOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
