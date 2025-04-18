import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleLeftIcon],svg[la-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.906 4.781L4.687 16l11.22 11.219l1.405-1.438L7.533 16l9.78-9.781zm7 0L11.688 16l11.218 11.219l1.407-1.438L14.53 16l9.781-9.781z"></svg:path>`,
})
export class LaAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
