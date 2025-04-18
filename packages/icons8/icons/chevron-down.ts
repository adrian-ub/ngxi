import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ChevronDownIcon],svg[icons8-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.906 6.594l-.718.687l-3.907 3.907l-.686.72l.687.687l13 13l.72.718l.72-.718l13-13l.686-.688l-.687-.72l-3.907-3.905l-.72-.686l-.687.687L16 15.688L7.594 7.28zm-.03 2.843l8.405 8.376l.72.687l.72-.688l8.405-8.375l2.438 2.438L16 23.47L4.437 11.874z"></svg:path>`,
})
export class Icons8ChevronDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
