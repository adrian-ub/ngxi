import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHl7v2LogoIcon],svg[healthicons-hl7v2-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.954 4h15.95c.288 0 .521.234.521.523v16.021a.52.52 0 0 1-.888.37l-3.261-3.276a.02.02 0 0 0-.029 0l-8.617 8.655a.52.52 0 0 1-.735 0l-8.617-8.655a.525.525 0 0 1 0-.74l8.617-8.655a.02.02 0 0 0 0-.027l-3.309-3.323A.523.523 0 0 1 15.954 4"></svg:path><svg:path d="M28.37 21.707a.52.52 0 0 1 .735 0l8.618 8.655a.525.525 0 0 1 0 .74l-8.617 8.655a.02.02 0 0 0 0 .027l3.308 3.323a.523.523 0 0 1-.367.893H16.095a.52.52 0 0 1-.52-.523V27.456a.52.52 0 0 1 .888-.37l3.261 3.276a.02.02 0 0 0 .03 0z"></svg:path></svg:g>`,
})
export class HealthiconsHl7v2LogoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
