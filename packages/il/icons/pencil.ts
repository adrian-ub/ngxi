import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilPencilIcon],svg[il-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M626 70q25 25 41 52t23 52t4 46t-17 36L389 544L288 646L0 696l51-287l101-102L440 19q14-14 36-17t47 4t52 23t51 41M259 602q-12-20-30-44t-43-48t-48-43t-44-30L76 542q21 15 42.5 36.5T154 621z"></svg:path>`,
})
export class IlPencilIcon {
  readonly viewBox = input("0 0 700 820")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
