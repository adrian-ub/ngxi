import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDirectionsIcon],svg[whh-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024L320 896L0 1024V879q34-14 62-36l-46-46q-6 5-16 10V128L320 0l384 128L1024 0v896zM64 736l64 32q57-73 64-128h-65q-3 13-13.5 30.5T85 710t-21 26m128-288q-57 73-64 128h65q2-13 13-30.5t29-39t21-26.5zm192-128q-70 9-126 52l46 47q37-26 80-34zm64 0v65q44 8 80 34l46-47q-56-43-126-52m441 0q6-6 6-14.5t-6-14.5l-29-30q-6-6-15-6t-15 6l-94 95l-95-95q-6-6-14.5-6t-15.5 6l-29 30q-6 6-6 14.5t6 14.5l95 96l-95 95q-6 6-6 14.5t6 14.5l29 30q6 6 15 6t15-6l95-95l94 95q6 6 15 6t15-6l29-30q6-6 6-14.5t-6-14.5l-95-95z"></svg:path>`,
})
export class WhhDirectionsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
