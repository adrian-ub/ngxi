import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPommoIcon],svg[whh-pommo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768V354L608 768H416L192 354v414H0V0h192l320 576L832 0h192v768z"></svg:path>`,
})
export class WhhPommoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
