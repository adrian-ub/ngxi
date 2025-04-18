import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenConstantIcon],svg[oui-token-constant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.414 3.757l2.829 2.829a2 2 0 0 1 0 2.828l-2.829 2.829a2 2 0 0 1-2.828 0L3.757 9.414a2 2 0 0 1 0-2.828l2.829-2.829a2 2 0 0 1 2.828 0m-1.747 2.91a1 1 0 0 0-1 1v.666a1 1 0 0 0 1 1h.666a1 1 0 0 0 1-1v-.666a1 1 0 0 0-1-1z"></svg:path>`,
})
export class OuiTokenConstantIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
