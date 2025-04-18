import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclePauseIcon],svg[gravity-ui-circle-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.75-9.75a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1m-2.5 1a1 1 0 0 0-2 0v3.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclePauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
