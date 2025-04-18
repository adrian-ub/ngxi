import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBrushIcon],svg[subway-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.1 372.5C59.4 431.9 49.5 451.7 0 451.7c168.2 69.3 197.9-49.5 197.9-49.5l-49.5-49.5s-49.5-9.8-69.3 19.8M504.6 46.1c-14-14-38-3.9-38-3.9c-35 7-229.1 201.8-229.1 201.8l69.3 69.3S501.6 119.2 508.6 84.2c-.1-.1 10-24.2-4-38.1M168.2 333l49.5 49.5L287 333l-69.3-69.3z"></svg:path>`,
})
export class SubwayBrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
