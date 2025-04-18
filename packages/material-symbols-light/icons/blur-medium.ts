import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBlurMediumIcon],svg[material-symbols-light-blur-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.192 16.5H7.5v-1h4.942q-.734-.54-1.187-1.312q-.453-.773-.54-1.688H4.963v-1h5.754q.105-.915.549-1.687T12.442 8.5H4.5v-1h10.692q1.868 0 3.184 1.316q1.316 1.315 1.316 3.181t-1.316 3.185t-3.184 1.318m.003-1q1.459 0 2.478-1.022t1.02-2.48t-1.022-2.479T15.19 8.5t-2.478 1.022t-1.02 2.48t1.022 2.479t2.48 1.019m-10.886 1v-1H5.73v1z"></svg:path>`,
})
export class MaterialSymbolsLightBlurMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
