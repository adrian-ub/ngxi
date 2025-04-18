import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickThinIcon],svg[ph-mouse-left-click-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-64V28h12a52.06 52.06 0 0 1 52 52m-72-52v42.34L87.7 34.05A51.6 51.6 0 0 1 112 28ZM80.78 38.44L124 81.66V108h-10.34L64.51 58.85a52.5 52.5 0 0 1 16.27-20.41M60 80a51.6 51.6 0 0 1 1.59-12.75L102.34 108H60Zm84 148h-32a52.06 52.06 0 0 1-52-52v-60h136v60a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhMouseLeftClickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
