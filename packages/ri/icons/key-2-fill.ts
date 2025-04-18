import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKey2FillIcon],svg[ri-key-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.313 11.566l7.94-7.94l2.121 2.12l-1.414 1.415l2.121 2.121l-3.535 3.536l-2.121-2.121l-2.99 2.99a5.002 5.002 0 0 1-7.97 5.849a5 5 0 0 1 5.848-7.97m-.899 5.848a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"></svg:path>`,
})
export class RiKey2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
