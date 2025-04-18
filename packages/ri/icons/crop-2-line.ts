import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCrop2LineIcon],svg[ri-crop-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.414 17H15v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v13.586L15.586 7H9V5h8.586l2.556-2.556l1.414 1.414L19 6.414V17h3v2h-3v3h-2V8.414z"></svg:path>`,
})
export class RiCrop2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
