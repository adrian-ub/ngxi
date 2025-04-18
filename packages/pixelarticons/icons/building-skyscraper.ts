import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBuildingSkyscraperIcon],svg[pixelarticons-building-skyscraper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4v5h2v2h-2v11h4v-9h2v9h2v2H2v-2h2V8h2v12h6V4h-2zM8 6V4h2v2zm0 0H6v2h2zm10 5h-2V9h2zm-8-1H8v2h2zm-2 4h2v2H8z"></svg:path>`,
})
export class PixelarticonsBuildingSkyscraperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
