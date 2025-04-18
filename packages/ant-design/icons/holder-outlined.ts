import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignHolderOutlinedIcon],svg[ant-design-holder-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300 276.497a56 56 0 1 0 56-96.994a56 56 0 0 0-56 96.994m0 284a56 56 0 1 0 56-96.994a56 56 0 0 0-56 96.994M640 228a56 56 0 1 0 112 0a56 56 0 0 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 0 0-112 0M300 844.497a56 56 0 1 0 56-96.994a56 56 0 0 0-56 96.994M640 796a56 56 0 1 0 112 0a56 56 0 0 0-112 0"></svg:path>`,
})
export class AntDesignHolderOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
