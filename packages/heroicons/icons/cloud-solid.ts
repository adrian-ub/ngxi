import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCloudSolidIcon],svg[heroicons-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226q.21-.024.427-.024a3.75 3.75 0 0 1 3.706 4.327A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004a6 6 0 0 1-.02-.496" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsCloudSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
