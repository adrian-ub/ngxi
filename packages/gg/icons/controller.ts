import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggControllerIcon],svg[gg-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 6.343l1.415-1.414L12 .686L7.757 4.93l1.415 1.414L12 3.515zm-9.899 9.9l1.414-1.415L3.515 12l2.828-2.828L4.93 7.757L.686 12zm2.828 2.828L12 23.314l4.243-4.243l-1.415-1.414L12 20.485l-2.828-2.828zm9.9-9.899L20.485 12l-2.828 2.828l1.414 1.415L23.314 12L19.07 7.757z"></svg:path><svg:path fill-rule="evenodd" d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
