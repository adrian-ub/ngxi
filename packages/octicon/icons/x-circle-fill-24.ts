import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconXCircleFill24Icon],svg[octicon-x-circle-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.036-4.024a.75.75 0 0 0-1.042.018a.75.75 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275a.75.75 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275a.75.75 0 0 0-.734.215L12 10.939Z"></svg:path>`,
})
export class OcticonXCircleFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
