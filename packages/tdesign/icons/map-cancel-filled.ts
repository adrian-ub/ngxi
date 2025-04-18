import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCancelFilledIcon],svg[tdesign-map-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.717L1 5.926V21.5l5.5-2.267zm2 16.193l5 2.953v-.173a6.48 6.48 0 0 1-2-4.69a6.48 6.48 0 0 1 2-4.69V5.09l-5-2.952zM21 2.5v8.732a6.5 6.5 0 0 0-3-.732a6.5 6.5 0 0 0-2.5.498v-6.23zm-.171 10.257L18 15.586l-2.828-2.829l-1.414 1.415L16.586 17l-2.828 2.828l1.414 1.415L18 18.414l2.829 2.829l1.414-1.415L19.415 17l2.828-2.828z"></svg:path>`,
})
export class TdesignMapCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
