import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfThinIcon],svg[ph-subset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-4-44h-96a52 52 0 0 1 0-104h96a4 4 0 0 0 0-8h-96a60 60 0 0 0 0 120h96a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSubsetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
