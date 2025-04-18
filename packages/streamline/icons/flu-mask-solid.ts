import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFluMaskSolidIcon],svg[streamline-flu-mask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.03 5.837c0-1.365 1.047-2.56 2.442-2.56h9.057c1.394 0 2.44 1.195 2.44 2.56a2.64 2.64 0 0 1-.487 1.535a2.4 2.4 0 0 1-.479.479l-1.838 1.438A6.75 6.75 0 0 1 2.86 9.3L1.002 7.854a2.4 2.4 0 0 1-.488-.487a2.64 2.64 0 0 1-.484-1.53m2.442-1.06c-.474 0-.942.427-.942 1.06c0 .245.076.477.207.66a1 1 0 0 0 .186.173l1.344 1.045V4.778zm9.607 1.892l-1.346 1.053V4.778h.795c.474 0 .942.426.942 1.059c0 .246-.077.479-.208.663a1 1 0 0 1-.183.17Zm-5.77-1.161a.625.625 0 0 0 0 1.25h1.383a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFluMaskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
