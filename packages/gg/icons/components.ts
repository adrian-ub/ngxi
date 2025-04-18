import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggComponentsIcon],svg[gg-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.757 6.343L12 2.1l4.243 4.243L12 10.586zm2.829 0L12 4.93l1.414 1.414L12 7.757zM2.1 12l4.243-4.243L10.586 12l-4.243 4.243zm2.829 0l1.414-1.414L7.757 12l-1.414 1.414zm8.485 0l4.243 4.243L21.9 12l-4.243-4.243zm4.243-1.414L16.243 12l1.414 1.414L19.07 12zm-9.9 7.071L12 13.414l4.243 4.243L12 21.9zm2.829 0L12 16.243l1.414 1.414L12 19.07z" clip-rule="evenodd"></svg:path>`,
})
export class GgComponentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
