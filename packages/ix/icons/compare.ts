import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCompareIcon],svg[ix-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m313.848 441.686l30.166-30.166l-48.916-48.917h174.235v-42.667H295.098l48.916-48.917l-30.166-30.166l-100.515 100.416zM198.144 70.185l100.523 100.418l-100.523 100.415l-30.166-30.166l48.915-48.916H42.667v-42.667h174.229l-48.918-48.918z" clip-rule="evenodd"></svg:path>`,
})
export class IxCompareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
