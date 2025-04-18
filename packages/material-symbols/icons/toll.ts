import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTollIcon],svg[material-symbols-toll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20q-3.35 0-5.675-2.325T7 12t2.325-5.675T15 4t5.675 2.325T23 12t-2.325 5.675T15 20m-8-.25q-2.65-.7-4.325-2.85T1 12t1.675-4.9T7 4.25v2.1q-1.8.625-2.9 2.175T3 12t1.1 3.475T7 17.65z"></svg:path>`,
})
export class MaterialSymbolsTollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
