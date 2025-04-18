import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixExploreIcon],svg[ix-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m380.656 106.622l-35.01 23.344l37.117 92.733l42.309-12.418zm-71.28 47.49L97.67 295.272l4.928 9.857l239.035-70.334zm90.3-111.445l83.57 194.995l-157.166 46.221l63.256 168.168l-39.95 14.982l-64.351-171.075l-28.928 8.49l-59.662 162.6l-39.217-16.808l47.999-130.816l-124.824 36.721l-37.736-75.472z"></svg:path>`,
})
export class IxExploreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
