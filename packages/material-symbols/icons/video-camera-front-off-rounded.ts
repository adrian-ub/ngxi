import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCameraFrontOffRoundedIcon],svg[material-symbols-video-camera-front-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 22.65L1.35 4.15q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.5 18.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275M4 4l14 14q0 .825-.587 1.413T16 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4m2 12h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45zm15.15.65l-3.325-3.325q-.25.35-.712.425t-.813-.275L8.525 5.7q-.25-.25-.288-.525t.088-.55t.35-.45T9.25 4H16q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125"></svg:path>`,
})
export class MaterialSymbolsVideoCameraFrontOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
