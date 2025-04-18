import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIntegratedDataAndResearch24pxIcon],svg[healthicons-integrated-data-and-research-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 11.296V20c0 .552 0 1 1 1h2c1 0 1-.448 1-1v-6.762a5.86 5.86 0 0 1-4-1.942"></svg:path><svg:path fill-rule="evenodd" d="M10.398 9.201a4.378 4.378 0 0 0 6.282 1.893l2.613 2.613l1.414-1.414l-2.613-2.613a4.375 4.375 0 1 0-7.696-.479m3.977.549q-.213 0-.417-.036A2.37 2.37 0 0 1 12.643 9a2.375 2.375 0 1 1 1.732.75" clip-rule="evenodd"></svg:path><svg:path d="M4 4c0-.552 0-1 1-1h2c1 0 1 .448 1 1v16c0 .552 0 1-1 1H5c-1 0-1-.448-1-1zm13 11c-1 0-1 .448-1 1v4c0 .552 0 1 1 1h2c.552 0 1 0 1-1v-4c0-.552 0-1-1-1z"></svg:path></svg:g>`,
})
export class HealthiconsIntegratedDataAndResearch24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
