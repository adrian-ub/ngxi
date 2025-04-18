import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIntegratedDataAndResearchOutline24pxIcon],svg[healthicons-integrated-data-and-research-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.5 4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm-3 1v14h1V5z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 10.655V20a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6.751h-.125a5.9 5.9 0 0 1-1.875-.305V19h-1v-6.5a5.9 5.9 0 0 1-2-1.845"></svg:path><svg:path fill-rule="evenodd" d="M14.375 11.75q.063 0 .125-.002a4.35 4.35 0 0 0 2.18-.654l2.613 2.613l1.414-1.414l-2.613-2.613a4.375 4.375 0 1 0-3.72 2.07m0-2A2.37 2.37 0 0 1 12.643 9a2.375 2.375 0 1 1 1.732.75M16.5 15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 4v-2h1v2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsIntegratedDataAndResearchOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
