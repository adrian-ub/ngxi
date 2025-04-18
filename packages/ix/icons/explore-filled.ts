import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixExploreFilledIcon],svg[ix-explore-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m293.596 113.387l63.385 161.408l-30.9 9.088l63.255 168.168l-39.95 14.982l-64.351-171.075l-28.928 8.49l-59.662 162.6l-39.217-16.808l47.999-130.816l-124.824 36.721l-37.736-75.472zm106.08-70.72l83.57 194.995l-85.172 25.048l-68.15-173.542z"></svg:path>`,
})
export class IxExploreFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
