import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPetroleumSolventSteamIcon],svg[ps-petroleum-solvent-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 365h-44V151h121v37h-77v55h73v36h-73zm11 147q106 0 181-75t75-181t-75-181T256 0T75 75T0 256t75 181t181 75m0-469q88 0 150.5 62.5T469 256t-62.5 150.5T256 469t-150.5-62.5T43 256t62.5-150.5T256 43"></svg:path>`,
})
export class PsPetroleumSolventSteamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
