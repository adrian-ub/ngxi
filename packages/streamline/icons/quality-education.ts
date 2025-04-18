import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineQualityEducationIcon],svg[streamline-quality-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 6.546c-.748-.553-1.869-1.52-5.083-1.52v6.924c3.214 0 4.335.967 5.083 1.52zm0 0c.748-.553 1.869-1.52 5.083-1.52v6.924c-3.214 0-4.335.967-5.083 1.52zM10.763.521H4.086a1 1 0 0 0-.528.15L1.801 1.765l1.757 1.092a1 1 0 0 0 .528.15h6.677a1.243 1.243 0 1 0 0-2.485ZM8.986.575v2.432"></svg:path>`,
})
export class StreamlineQualityEducationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
