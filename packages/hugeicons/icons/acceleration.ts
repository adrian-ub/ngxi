import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAccelerationIcon],svg[hugeicons-acceleration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.498 18.414V11.19c0-1.329 0-1.993.599-2.158c.598-.166 1.303.304 2.712 1.244l12.774 8.516c1.41.939 2.114 1.409 1.866 1.808s-1.244.4-3.237.4H6.377c-1.828 0-2.743 0-3.31-.379c-.569-.378-.569-.988-.569-2.207m6-7.414a4 4 0 1 0 0-8a4 4 0 0 0 0 8m7.004-1.004l5.903 3.384m0 0c.32-.34-.22-1.32-.677-2.652m.677 2.652c-.22.24-.941.3-2.641.618" color="currentColor"></svg:path>`,
})
export class HugeiconsAccelerationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
