import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLayersTwoSolidIcon],svg[mynaui-layers-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.305 5.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z"></svg:path><svg:path d="M3.305 13.315a.75.75 0 1 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 1 0-.61-1.37L12 17.179z"></svg:path></svg:g>`,
})
export class MynauiLayersTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
