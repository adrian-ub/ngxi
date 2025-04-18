import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewComfyIcon],svg[zmdi-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V43h85v85zm0 107v-86h85v86zm107 0v-86h85v86zm106 0v-86h86v86zM107 128V43h85v85zm106-85h86v85h-86zm107 192v-86h85v86zM0 341v-85h85v85zm107 0v-85h85v85zm106 0v-85h86v85zm107 0v-85h85v85zm0-298h85v85h-85z"></svg:path>`,
})
export class ZmdiViewComfyIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
