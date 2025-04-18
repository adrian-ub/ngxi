import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewComfyOutlineIcon],svg[mdi-view-comfy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h19V5zm17 4h-2.25V7H20zM9.25 11h2.25v2H9.25zm-2 2H5v-2h2.25zm4.25-4H9.25V7h2.25zm2-2h2.25v2H13.5zm-2 8v2H9.25v-2zm2 0h2.25v2H13.5zm0-2v-2h2.25v2zm4.25-2H20v2h-2.25zM7.25 7v2H5V7zM5 15h2.25v2H5zm12.75 2v-2H20v2z"></svg:path>`,
})
export class MdiViewComfyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
