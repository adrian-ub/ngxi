import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForYouIcon],svg[material-symbols-for-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q2.025 0 4.225-.413T20 10.5v10q-1.5.675-3.65 1.088T12 22t-4.35-.413T4 20.5v-10q1.575.675 3.775 1.088T12 12m0-10q1.65 0 2.825 1.175T16 6t-1.175 2.825T12 10T9.175 8.825T8 6t1.175-2.825T12 2"></svg:path>`,
})
export class MaterialSymbolsForYouIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
