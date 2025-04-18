import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssignSolidIcon],svg[bubbles-assign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.472 4.043h.917a.61.61 0 0 1 .611.61v6.71a3.63 3.63 0 0 1-1.07 2.572A3.66 3.66 0 0 1 9.35 15H2.61a.61.61 0 0 1-.61-.609V4.652a.607.607 0 0 1 .611-.609h5.5M7.5 6.478l3.935-3.919m.649.267A.915.915 0 0 0 13 1.913A.915.915 0 0 0 12.084 1a.915.915 0 0 0-.917.913c0 .504.41.913.917.913"></svg:path><svg:path d="M9.944 14.951v-2.386a.61.61 0 0 1 .611-.608h2.396M3.833 8.304h6.722M3.833 10.13h6.722m-6.722 1.827h3.361"></svg:path></svg:g>`,
})
export class BubblesAssignSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
