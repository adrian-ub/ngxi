import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMbankIcon],svg[arcticons-mbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.711 22.274a5.755 5.755 0 0 1 5.755-5.756h0a5.755 5.755 0 0 1 5.756 5.755v9.209"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.711 31.482V16.518H9.5m14.722 5.756a5.755 5.755 0 0 1 5.755-5.756h0a5.755 5.755 0 0 1 5.755 5.755v7.33c0 1.421 1.518 2.326 2.768 1.65h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsMbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
