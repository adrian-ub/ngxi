import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfEmptyFlagIcon],svg[wpf-empty-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.906-.031A1 1 0 0 0 5.781 0a1 1 0 0 0-.718.656L5 .625v.188A1 1 0 0 0 5 1v24a1 1 0 1 0 2 0v-8.531L23.375 9L7 1.531V1A1 1 0 0 0 5.906-.031M7 3.719L18.563 9L7 14.281V3.72z"></svg:path>`,
})
export class WpfEmptyFlagIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
