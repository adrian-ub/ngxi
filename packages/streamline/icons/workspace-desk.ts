import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWorkspaceDeskIcon],svg[streamline-workspace-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.906 13.5V9.134c0-.612-.496-1.109-1.109-1.109H2.202c-.612 0-1.108.497-1.108 1.109V13.5m8.942-13H3.963a.784.784 0 0 0-.784.784v3.599c0 .433.351.784.784.784h6.073a.784.784 0 0 0 .784-.784V1.284A.784.784 0 0 0 10.036.5M7 5.667v2.358m-5.906 2.187h11.813"></svg:path>`,
})
export class StreamlineWorkspaceDeskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
