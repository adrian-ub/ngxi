import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewComfyIcon],svg[mdi-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4V5H3zm0 5h4v-4H3zm5 0h4v-4H8zm5 0h4v-4h-4zM8 9h4V5H8zm5-4v4h4V5zm5 9h4v-4h-4zM3 19h4v-4H3zm5 0h4v-4H8zm5 0h4v-4h-4zm5 0h4v-4h-4zm0-14v4h4V5z"></svg:path>`,
})
export class MdiViewComfyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
