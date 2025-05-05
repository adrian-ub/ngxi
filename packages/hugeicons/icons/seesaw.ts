import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSeesawIcon],svg[hugeicons-seesaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 17h8m-2.5 0v-5m-3 1v4m5.404-11.364l1.423-.318m0 0l1.423-.317m-1.423.317l.657 2.752m-14.415.32l1.424-.318m0 0l1.423-.318m-1.423.318l.657 2.751m-3.084.689l18.502-4.13a.73.73 0 0 1 .875.53c.273 1.14-.463 2.276-1.642 2.54L4.647 13.946c-1.18.263-2.356-.448-2.628-1.588a.706.706 0 0 1 .547-.846" color="currentColor"></svg:path>`,
})
export class HugeiconsSeesawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
