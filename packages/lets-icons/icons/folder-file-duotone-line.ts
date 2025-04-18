import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderFileDuotoneLineIcon],svg[lets-icons-folder-file-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsFolderFileDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M18.5 11V7.5c0-1.886 0-2.828-.586-3.414S16.386 3.5 14.5 3.5h-5c-1.886 0-2.828 0-3.414.586S5.5 5.614 5.5 7.5V8"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M12.576 10.424A.6.6 0 0 0 13 10.6h4.8c.57 0 .961 0 1.265.025c.296.024.455.069.57.128a1.4 1.4 0 0 1 .612.611l.504-.256l-.504.256c.06.116.104.275.128.571c.024.304.025.695.025 1.265v4.6c0 .57 0 .961-.025 1.265c-.024.296-.069.455-.128.57a1.4 1.4 0 0 1-.611.612c-.116.06-.275.104-.571.128c-.304.024-.695.025-1.265.025H6.2c-.57 0-.961 0-1.265-.025c-.296-.024-.455-.069-.57-.128a1.4 1.4 0 0 1-.612-.611c-.06-.116-.104-.275-.128-.571C3.6 18.76 3.6 18.37 3.6 17.8v-7.6c0-.57 0-.961.025-1.265c.024-.296.069-.455.128-.57a1.4 1.4 0 0 1 .611-.612c.116-.06.275-.104.571-.128C5.24 7.6 5.63 7.6 6.2 7.6h2.475c.517 0 .678.004.823.039q.216.051.405.167c.127.078.244.19.61.556z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsFolderFileDuotoneLine0)"></svg:path>`,
})
export class LetsIconsFolderFileDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
