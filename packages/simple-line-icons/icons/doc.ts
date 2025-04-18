import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsDocIcon],svg[simple-line-icons-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544z"></svg:path>`,
})
export class SimpleLineIconsDocIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
