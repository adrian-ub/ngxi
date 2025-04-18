import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForYouRoundedIcon],svg[material-symbols-for-you-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q1.625 0 3.375-.262t3.25-.738q.5-.2.938.125t.437.85v7.15q0 .625-.363 1.138T18.7 21q-1.425.475-3.187.738T12 22t-3.512-.262T5.3 21q-.575-.225-.937-.737T4 19.124v-7.15q0-.525.438-.85T5.375 11q1.5.475 3.25.738T12 12m0-10q1.65 0 2.825 1.175T16 6t-1.175 2.825T12 10T9.175 8.825T8 6t1.175-2.825T12 2"></svg:path>`,
})
export class MaterialSymbolsForYouRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
