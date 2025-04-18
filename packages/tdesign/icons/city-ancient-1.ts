import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient1Icon],svg[tdesign-city-ancient-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.52 4.915c.922-.936 1.482-1.96 1.482-2.915h2c0 .956.56 1.98 1.482 2.916c.91.923 2.037 1.617 2.864 1.924c.337.125.554.16.652.16h1v2h-1v2h4v2h-1v7h1v2H2v-2h1v-7H2v-2h4.002V9H5V7h1c.098 0 .316-.035.654-.16c.827-.308 1.955-1.002 2.865-1.925M8.001 9v2H16V9zM13.8 7q-.385-.32-.74-.68a8.7 8.7 0 0 1-1.058-1.291a8.7 8.7 0 0 1-1.058 1.29q-.355.36-.74.681zM5 13v7h6.002v-4h2v4H19v-7z"></svg:path>`,
})
export class TdesignCityAncient1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
