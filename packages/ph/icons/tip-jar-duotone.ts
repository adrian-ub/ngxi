import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTipJarDuotoneIcon],svg[ph-tip-jar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v112a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32V88a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Zm-40-40a24 24 0 0 1-24 24v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h24a8 8 0 0 0 0-16h-16a24 24 0 0 1 0-48v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16h-24a8 8 0 0 0 0 16h16a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhTipJarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
