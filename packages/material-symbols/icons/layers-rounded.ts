import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLayersRoundedIcon],svg[material-symbols-layers-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.025 14.85q-.4-.3-.387-.787t.412-.788q.275-.2.6-.2t.6.2L12 18.5l6.75-5.225q.275-.2.6-.2t.6.2q.4.3.413.787t-.388.788l-6.75 5.25q-.55.425-1.225.425t-1.225-.425zm6.75.2l-5.75-4.475Q4.25 9.975 4.25 9t.775-1.575l5.75-4.475q.55-.425 1.225-.425t1.225.425l5.75 4.475q.775.6.775 1.575t-.775 1.575l-5.75 4.475q-.55.425-1.225.425t-1.225-.425"></svg:path>`,
})
export class MaterialSymbolsLayersRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
