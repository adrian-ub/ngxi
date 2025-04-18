import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTaskFillIcon],svg[ri-task-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v18.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H20a1 1 0 0 1 1 1m-9.707 10.121l-2.475-2.475l-1.414 1.415l3.889 3.889l5.657-5.657l-1.414-1.414z"></svg:path>`,
})
export class RiTaskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
