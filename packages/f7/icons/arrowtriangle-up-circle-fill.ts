import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowtriangleUpCircleFillIcon],svg[f7-arrowtriangle-up-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m8.344-17.25H19.633c-1.172 0-1.664-1.36-1.008-2.414l8.086-13.664c.562-.96 1.992-1.008 2.578 0l8.062 13.664c.657 1.125.141 2.414-1.007 2.414"></svg:path>`,
})
export class F7ArrowtriangleUpCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
