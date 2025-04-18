import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowDownOIcon],svg[gg-arrow-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.829 12.026l1.414 1.414L12 17.683L7.757 13.44l1.415-1.414L11 13.854V6.317h2v7.537z"></svg:path><svg:path fill-rule="evenodd" d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556m-1.414-1.414A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowDownOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
