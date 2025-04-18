import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilStudioLightSideOffIcon],svg[pepicons-pencil-studio-light-side-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.168 4.872c.997-.665 2.332.05 2.332 1.248v3.263c0 1.198-1.335 1.913-2.332 1.248l-2.945-1.963l.554-.832l2.946 1.963a.5.5 0 0 0 .777-.416V6.12a.5.5 0 0 0-.777-.416l-2.946 1.964l-.554-.832zm-.711 13.083a.5.5 0 0 1-.66.254L9 16.52v1.73a.5.5 0 0 1-1 0v-1.73l-3.797 1.688a.5.5 0 0 1-.406-.914L8 15.427v-4.175a.5.5 0 1 1 1 0v4.175l4.203 1.868a.5.5 0 0 1 .254.66"></svg:path><svg:path d="M5 5.752a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M11.146 5.605a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708.707l-3 3a.5.5 0 0 1-.708 0m3.708 8a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .707-.707l3 3a.5.5 0 0 1 0 .707"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilStudioLightSideOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
