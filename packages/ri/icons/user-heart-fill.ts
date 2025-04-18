import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserHeartFillIcon],svg[ri-user-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.841 15.659l.176.177l.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359l-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v8H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6s-2.685 6-6 6s-6-2.685-6-6s2.685-6 6-6"></svg:path>`,
})
export class RiUserHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
