import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNextWeekIcon],svg[ic-sharp-next-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7h-6V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H2v15h20zM10 5h4v2h-4zm1 13.5l-1-1l3-3l-3-3l1-1l4 4z"></svg:path>`,
})
export class IcSharpNextWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
