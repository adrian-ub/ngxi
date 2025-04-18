import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWalletSolidIcon],svg[streamline-wallet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.355a3.5 3.5 0 0 1 3.5-3.5H10a.5.5 0 0 1 .5.5v1.398H3.355a.625.625 0 1 0 0 1.25h7.585q.03 0 .058-.003h.214a1.5 1.5 0 0 1 1.5 1.5v.916h-2.95c-.824 0-1.75.625-1.75 1.695v1.778c0 1.07.926 1.695 1.75 1.695h2.95v.916a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 12.5zm9.763 3.311h3.5c.276 0 .5.2.5.445v1.778c0 .246-.224.445-.5.445h-3.5c-.276 0-.5-.2-.5-.445V8.111c0-.246.224-.445.5-.445" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWalletSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
