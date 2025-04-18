import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsCompaignIcon],svg[streamline-politics-compaign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.484 3.563h11.04M1.39 10.277h11.235M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m2.948-1.145v1.062m0 0L2.74 7.98m.708-1.063l.709 1.063m-.709-1.063l-1.062-.354m1.062.354l1.063-.354m2.449-.708v1.062m0 0L6.252 7.98m.708-1.063l.71 1.063m-.71-1.063l-1.062-.354m1.062.354l1.063-.354m2.449-.708v1.062m0 0L9.764 7.98m.708-1.063l.709 1.063m-.709-1.063L9.41 6.563m1.062.354l1.063-.354"></svg:path>`,
})
export class StreamlinePoliticsCompaignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
