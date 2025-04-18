import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSortAscendingIcon],svg[ix-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m463.082 207.19l-30.167 30.166L384 188.44v238.227h-42.667v-238.23l-48.918 48.919l-30.166-30.167l100.418-100.522zm-292.415-36.523H64v42.667h106.667zm42.666 106.667H64V320h149.333zM64 426.667h192V384H64z"></svg:path>`,
})
export class IxSortAscendingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
