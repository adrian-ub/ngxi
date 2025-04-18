import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoCupIcon],svg[entypo-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1C5.721 1 3.06 2.41 3.205 3.555l1.442 13.467c.058.46 2.221 1.976 5.353 1.978c3.131-.002 5.295-1.518 5.351-1.979l1.442-13.467C16.938 2.41 14.279 1 10 1m0 4.291c-3.132-.002-5.353-1.117-5.353-1.535C4.646 3.342 6.869 2.225 10 2.227c3.131-.002 5.354 1.115 5.351 1.529c0 .418-2.22 1.533-5.351 1.535"></svg:path>`,
})
export class EntypoCupIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
