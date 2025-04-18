import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7EjectFillIcon],svg[f7-eject-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.879 32.5c1.852 0 2.906-.984 2.906-2.625c0-.773-.375-1.594-1.03-2.297L30.847 7.82c-.797-.867-1.711-1.453-2.883-1.453c-1.125 0-2.086.633-2.86 1.453L7.176 27.578c-.655.703-1.03 1.524-1.007 2.297c.023 1.64 1.031 2.625 2.906 2.625Zm-1.031 5.297H10.152c-2.835 0-4.43 1.476-4.43 4.266v3.28c0 2.79 1.594 4.29 4.43 4.29h35.696c2.812 0 4.43-1.477 4.43-4.29v-3.28c0-2.813-1.618-4.266-4.43-4.266"></svg:path>`,
})
export class F7EjectFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
