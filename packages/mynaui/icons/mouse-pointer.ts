import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMousePointerIcon],svg[mynaui-mouse-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.866 12.866l5.628-2.412c.942-.404.886-1.758-.086-2.082L5.469 4.059c-.871-.29-1.7.539-1.41 1.41l4.313 12.939c.324.972 1.678 1.028 2.082.086zm0 0L20 20"></svg:path>`,
})
export class MynauiMousePointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
