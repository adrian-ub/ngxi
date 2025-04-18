import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMagicWandIcon],svg[icomoon-free-magic-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L2 1H1v1l2 2zm1-3h1v2H5zm4 5h2v1H9zm1-3V1H9L7 3l1 1zM0 5h2v1H0zm5 4h1v2H5zM1 9v1h1l2-2l-1-1zm14.781 4.781L5.842 3.842a.75.75 0 0 0-1.061 0l-.939.939a.75.75 0 0 0 0 1.061l9.939 9.939a.75.75 0 0 0 1.061 0l.939-.939a.75.75 0 0 0 0-1.061M7.5 8.5l-3-3l1-1l3 3z"></svg:path>`,
})
export class IcomoonFreeMagicWandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
