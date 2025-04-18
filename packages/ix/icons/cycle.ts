import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCycleIcon],svg[ix-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 234.667V256c0 70.693-57.308 128-128 128H161.849l38.988 39.007l-30.17 30.17l-90.51-90.51l90.51-90.51l30.17 30.17l-38.988 39.006H320c46.657 0 84.568-37.444 85.322-83.922l.011-1.41v-21.334zM341.333 58.824l90.51 90.51l-90.51 90.51l-30.17-30.17l38.987-39.007H192c-46.657 0-84.568 37.445-85.322 83.922l-.011 1.411l-.001 21.333H64V256c0-69.985 56.167-126.852 125.883-127.983L192 128h158.151l-38.988-39.006z"></svg:path>`,
})
export class IxCycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
