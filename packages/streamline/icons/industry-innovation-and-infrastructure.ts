import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIndustryInnovationAndInfrastructureIcon],svg[streamline-industry-innovation-and-infrastructure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.65 11.694v-3.62l3.167-1.357l3.167 1.358v3.619L3.817 13.05z"></svg:path><svg:path d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122L6.983 4.48l3.167-1.357"></svg:path><svg:path d="m6.983 8.067l3.167 1.357l3.167-1.357"></svg:path><svg:path d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.358v3.619L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"></svg:path></svg:g>`,
})
export class StreamlineIndustryInnovationAndInfrastructureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
