import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNavigationRightIcon],svg[ix-navigation-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-128 42.666H106.667v298.667H320zm42.667 256l-.001 42.667h42.667v-42.667zM405.333 192h-42.666v42.667l42.666-.001zm0-85.333l-42.667-.001v42.667h42.667zM362.667 320h42.666v-42.667h-42.666z"></svg:path>`,
})
export class IxNavigationRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
