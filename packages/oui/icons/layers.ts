import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiLayersIcon],svg[oui-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.276 1.053a.5.5 0 0 1 .448 0l6 3a.5.5 0 0 1 0 .894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1 0-.894zM2.618 4.5L7.5 6.941L12.382 4.5L7.5 2.059z"></svg:path><svg:path fill="currentColor" d="M1.053 7.276a.5.5 0 0 1 .67-.223L7.5 9.94l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"></svg:path><svg:path fill="currentColor" d="M1.724 10.053a.5.5 0 1 0-.448.894l6 3a.5.5 0 0 0 .448 0l6-3a.5.5 0 1 0-.448-.894L7.5 12.94l-5.776-2.888z"></svg:path>`,
})
export class OuiLayersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
