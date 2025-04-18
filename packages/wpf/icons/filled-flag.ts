import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfFilledFlagIcon],svg[wpf-filled-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.906-.031A1 1 0 0 0 5.781 0a1 1 0 0 0-.718.656L5 .625v.188A1 1 0 0 0 5 1v24a1 1 0 1 0 2 0v-8.531L23.375 9L7 1.531V1A1 1 0 0 0 5.906-.031"></svg:path>`,
})
export class WpfFilledFlagIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
