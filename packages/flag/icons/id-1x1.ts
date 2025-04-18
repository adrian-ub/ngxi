import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagId1x1Icon],svg[flag-id-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e70011" d="M0 0h512v256H0Z"></svg:path><svg:path fill="#fff" d="M0 256h512v256H0Z"></svg:path>`,
})
export class FlagId1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
