import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSurveillanceCancelledFilledIcon],svg[ix-surveillance-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m72.837 72.837l362.667 362.667l-30.17 30.17q-67.14-74.867-127.673-136.37l-36.011-9.888l-49.598 85.908l-.052-.025v.035l-85.333-.014V448H64V320h42.667v42.654h60.736l31.715-54.916L64 270.64l31.55-117.734a24717 24717 0 0 0-52.883-49.9zm115.032 54.694l281.143 76.703l-34.323 34.363l23.801 6.406l-22.086 82.426l-66.439-17.802z"></svg:path>`,
})
export class IxSurveillanceCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
