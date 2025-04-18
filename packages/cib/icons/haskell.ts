import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHaskellIcon],svg[cib-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.011 27.292L7.531 16L.011 4.708h5.645L13.219 16L5.656 27.292zm7.52 0L15.052 16L7.531 4.708h5.688l15.005 22.584h-5.631l-4.713-7.12l-4.661 7.12zm18.204-6.595l-2.505-3.765h8.76v3.765zm-3.771-5.645l-2.5-3.765h12.515v3.765z"></svg:path>`,
})
export class CibHaskellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
