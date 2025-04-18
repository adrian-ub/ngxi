import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSportsGymnasticsIcon],svg[ic-twotone-sports-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2M1 9h6l7-5l1.31 1.52l-4.17 2.98H14L21.8 4L23 5.4L14.5 12L14 22h-2l-.5-10L8 11H1z"></svg:path>`,
})
export class IcTwotoneSportsGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
