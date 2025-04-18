import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAutoFlashSolidIcon],svg[streamline-auto-flash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.263.113a.5.5 0 0 1 .352.477v3.615h2.38a.5.5 0 0 1 .412.783L4.88 11.571a.5.5 0 0 1-.912-.283V7.673h-2.38a.5.5 0 0 1-.413-.783L5.703.307a.5.5 0 0 1 .56-.194m4.263 6.383c.621 0 1.173.398 1.37.988l1.17 3.51l.01.03l.662 1.985a.75.75 0 0 1-1.423.474l-.496-1.487H9.233l-.495 1.487a.75.75 0 0 1-1.424-.474l.661-1.982l.012-.036l1.17-3.507c.196-.59.748-.988 1.369-.988m0 1.622l.793 2.378H9.733z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAutoFlashSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
