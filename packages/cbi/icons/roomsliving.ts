import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomslivingIcon],svg[cbi-roomsliving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 13a2 2 0 0 1 2 2v6.064a.936.936 0 0 1-.936.936H28v1a2 2 0 0 1-4 0v-1H8v1a2 2 0 0 1-4 0v-1H2.936A.936.936 0 0 1 2 21.064V15a2 2 0 0 1 4 0v2h20v-2a2 2 0 0 1 2-2M8 15a4 4 0 0 0-4-4V9a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v2a4 4 0 0 0-4 4z"></svg:path>`,
})
export class CbiRoomslivingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
