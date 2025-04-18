import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintMagnetOffIcon],svg[pepicons-print-magnet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.132 4.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717l4.243-4.243a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 3.89 8.89zm6.269 3.783a1 1 0 0 1-.557-1.3l1.35-3.376l1.559.52l.818-1.706a1 1 0 0 1 1.803.866l-1.581 3.294l-1.442-.48l-.65 1.624a1 1 0 0 1-1.3.557" opacity=".2"></svg:path><svg:path d="M7.132 3.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717L12.587 9.1a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 2.89 7.89zm.353 1.061l-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889l-2.324-2.323l-3.889 3.889A2.214 2.214 0 1 1 5.92 10.92l3.889-3.89z"></svg:path><svg:path d="m7.485 10.06l-3.03-3.03l.707-.707l3.03 3.03zm5.455 5.456l-3.03-3.03l.707-.708l3.03 3.03zm-.353-8.552a.5.5 0 0 1-.279-.65l1.175-2.937l1.53.51l1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898l-1.471-.49l-.825 2.062a.5.5 0 0 1-.65.278"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintMagnetOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
