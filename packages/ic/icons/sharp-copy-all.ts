import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCopyAllIcon],svg[ic-sharp-copy-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H7v16h13zm-2 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22H3v-2h2zm3.5 0h-2v-2h2zm7 0h-2v-2h2zM3 6h2v2H3z"></svg:path>`,
})
export class IcSharpCopyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
