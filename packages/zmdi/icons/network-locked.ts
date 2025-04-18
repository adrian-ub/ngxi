import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNetworkLockedIcon],svg[zmdi-network-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395 197q-40 0-68 28.5T299 293v6q-22 19-22 48v64H0L405 5v193q-9-1-10-1m53 128q9 0 15 6.5t6 15.5v85q0 9-6 15t-15 6H341q-8 0-14.5-6t-6.5-15v-85q0-9 6.5-15.5T341 325v-32q0-22 16-37.5t38-15.5t37.5 15.5T448 293zm-21 0v-32q0-13-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5v32z"></svg:path>`,
})
export class ZmdiNetworkLockedIcon {
  readonly viewBox = input("0 0 472 456")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
