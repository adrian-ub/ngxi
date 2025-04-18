import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSmartphoneCutoutCircleFilledIcon],svg[pepicons-pencil-smartphone-cutout-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSmartphoneCutoutCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 19 5v16a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 21zm1.5-.5A.5.5 0 0 0 8 5v16a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M10.5 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSmartphoneCutoutCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSmartphoneCutoutCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
