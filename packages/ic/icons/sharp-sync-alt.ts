import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSyncAltIcon],svg[ic-sharp-sync-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 12l4-4l-4-4v3H3v2h15zM6 12l-4 4l4 4v-3h15v-2H6z"></svg:path>`,
})
export class IcSharpSyncAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
