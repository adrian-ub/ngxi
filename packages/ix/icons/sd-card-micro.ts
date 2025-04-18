import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSdCardMicroIcon],svg[ix-sd-card-micro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 199.006L128 220.34v184.993h234.667V106.667H149.333zm-64 3.661l21.334-21.334V64h298.667v384h-320V320l21.333-21.333V256H85.334zm128-74.667h-32v64h32zM272 128h-32v64h32zm26.667 0h32v64h-32z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardMicroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
