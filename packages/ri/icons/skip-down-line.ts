import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipDownLineIcon],svg[ri-skip-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.086L7.207 5.293L5.793 6.707L12 12.914l6.207-6.207l-1.414-1.414zM18 17H6v-2h12z"></svg:path>`,
})
export class RiSkipDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
