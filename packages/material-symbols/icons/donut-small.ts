import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDonutSmallIcon],svg[material-symbols-donut-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.825 11q-.225-.65-.687-1.137t-1.113-.713v-7.1q3.575.35 6.088 2.863T21.975 11zm-3.8 10.95q-3.85-.375-6.425-3.225T2.025 12T4.6 5.275t6.425-3.225v7.1q-.9.325-1.45 1.113T9.025 12t.55 1.713t1.45 1.087zm2 0V14.8q.65-.225 1.113-.687T14.825 13h7.15q-.35 3.575-2.863 6.088t-6.087 2.862"></svg:path>`,
})
export class MaterialSymbolsDonutSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
