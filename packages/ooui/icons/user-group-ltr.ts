import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserGroupLtrIcon],svg[ooui-user-group-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="14" cy="6" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46c.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"></svg:path>`,
})
export class OouiUserGroupLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
