import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMerriamwebsterDictionaryIcon],svg[arcticons-merriamwebster-dictionary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.73 4.5H10.4a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h2.33m0-39v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.965 25.509l-2.4 8l-2.4-8l-2.4 8l-2.4-8m-1 .012h2m2.8 0h2m2.8 0h2m-10.8-3.039l1-7.991l4 8l4-7.988l1 7.988m-11-.009h2m8 0h2m-2-7.979h1m-10 0h1"></svg:path>`,
})
export class ArcticonsMerriamwebsterDictionaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
