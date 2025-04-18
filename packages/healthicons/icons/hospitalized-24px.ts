import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalized24pxIcon],svg[healthicons-hospitalized-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.5 3a1 1 0 1 0 0 2H18v2a1 1 0 1 0 2 0V3z"></svg:path><svg:path fill-rule="evenodd" d="M4.175 4.88a2.5 2.5 0 0 1 3.445.795L9.386 8.5H18.5A2.5 2.5 0 0 1 20 13v3h1v2h-1.268a2 2 0 1 1-3.465 0H7.732a2 2 0 1 1-3.465 0H3v-2h1V9.317l-.62-.992a2.5 2.5 0 0 1 .795-3.445m2.44 8.62H18V16H6v-3.483z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHospitalized24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
