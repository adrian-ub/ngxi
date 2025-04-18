import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPiwigoNgIcon],svg[arcticons-piwigo-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.955" cy="9.746" r="1.945" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.122 3.203a6.5 6.5 0 0 0-3.399.853C30.921 5.086 28.832 5.5 26.757 5.5H14.059A8.56 8.56 0 0 0 5.5 14.06v19.88a8.56 8.56 0 0 0 8.56 8.56h19.88a8.56 8.56 0 0 0 8.56-8.56V9.98c0-3.59-2.79-6.686-6.378-6.776"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="6.5"></svg:circle><svg:circle cx="24" cy="24" r="10.5"></svg:circle></svg:g>`,
})
export class ArcticonsPiwigoNgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
