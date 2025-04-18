import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDeepcoolIcon],svg[simple-icons-deepcool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12v3.046H3.046V6h6V0H12v9.046H6.092V12zm8.954 3.046V18h-5.908v6H12v-8.954z"></svg:path>`,
})
export class SimpleIconsDeepcoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
