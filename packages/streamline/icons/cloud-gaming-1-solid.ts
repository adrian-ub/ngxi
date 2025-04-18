import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudGaming1SolidIcon],svg[streamline-cloud-gaming-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a5.143 5.143 0 0 1 9.14-3.236a4.214 4.214 0 1 1 .646 8.38H5.143A5.143 5.143 0 0 1 0 6.999Zm4.803-.61a.625.625 0 1 0-1.25 0v.84h-.84a.625.625 0 0 0 0 1.25h.84v.841a.625.625 0 0 0 1.25 0v-.84h.84a.625.625 0 1 0 0-1.25h-.84v-.84Zm4.548 1.434a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.084.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-1.417-1.417a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m-.75 2.084a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudGaming1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
