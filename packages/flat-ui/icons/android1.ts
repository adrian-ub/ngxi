import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiAndroid1Icon],svg[flat-ui-android1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EBEEEF" d="M6 0h42c3.312 0 6 2.688 6 6v88c0 3.312-2.688 6-6 6H6c-3.312 0-6-2.688-6-6V6a6 6 0 0 1 6-6"></svg:path><svg:path fill="#1C3C50" d="M0 10h54v80H0z"></svg:path><svg:path fill="#24485F" d="M4 14h46v72H4z"></svg:path><svg:path fill="#BCC3C8" d="M13 93h28v4H13zm0-90h28v4H13z"></svg:path><svg:path fill="#1C3C50" d="M46 3a2 2 0 1 0 .001 4.001A2 2 0 0 0 46 3M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FlatUiAndroid1Icon {
  readonly viewBox = input("0 0 54 100")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
