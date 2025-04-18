import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCrop2FillIcon],svg[ri-crop-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.586 5l2.556-2.556l1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zM9 9h6v6H9z"></svg:path>`,
})
export class RiCrop2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
