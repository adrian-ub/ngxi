import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIconzyIcon],svg[arcticons-iconzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.398 29.102L24 43.5L9.602 29.102zM13.858 6.385h9.101v9.101h-9.101zM29.397 4.5l6.435 6.436l-6.435 6.435l-6.435-6.435zM13.858 17.373h9.101v9.101h-9.101zm10.989 0h9.101v9.101h-9.101z"></svg:path>`,
})
export class ArcticonsIconzyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
