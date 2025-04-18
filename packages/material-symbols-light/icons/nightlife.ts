import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNightlifeIcon],svg[material-symbols-light-nightlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.885 19.5v-1h2v-5.346L2.115 6h10.539l-4.77 7.154V18.5h2v1zm.4-10.5h4.2l1.361-2H3.923zm10.102 10.5q-1.04 0-1.771-.728q-.731-.729-.731-1.77t.729-1.771t1.77-.731q.399 0 .76.134q.362.133.74.45V6h4v1.77h-3V17q0 1.042-.728 1.77q-.728.73-1.769.73"></svg:path>`,
})
export class MaterialSymbolsLightNightlifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
