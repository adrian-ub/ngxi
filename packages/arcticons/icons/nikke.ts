import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNikkeIcon],svg[arcticons-nikke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4m8.276-25.359v13.718"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 30.859V17.141l5.961 13.718V17.141m4.568 0v13.718m4.836 0L21.16 24l3.705-6.813M21.16 24h-1.131m6.993-6.859v13.718m4.837 0L28.154 24l3.705-6.813M28.154 24h-1.132m6.979 0h2.933m1.566 6.859h-4.499V17.141H38.5"></svg:path>`,
})
export class ArcticonsNikkeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
