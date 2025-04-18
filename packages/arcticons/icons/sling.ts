import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSlingIcon],svg[arcticons-sling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.642 43.5l-8.521-21.468h6.613L26.255 43.5zm8.716-39l8.521 21.468h-6.613L21.745 4.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.619 15.234L21.995 32.766h-6.614l10.624-17.532zM19.642 43.5l10.624-17.532M26.255 43.5l10.624-17.532m-25.737-3.936L21.766 4.5m-4.032 17.532L28.358 4.5"></svg:path>`,
})
export class ArcticonsSlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
