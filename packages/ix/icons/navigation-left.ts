import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNavigationLeftIcon],svg[ix-navigation-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM149.333 362.666h-42.667v42.667h42.667zm256-256H192v298.667h213.334zM149.333 320v-42.667h-42.667V320zm0-85.334V192h-42.667v42.666zm0-85.333v-42.667h-42.666l-.001 42.667z"></svg:path>`,
})
export class IxNavigationLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
