import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons112Icon],svg[arcticons-112-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 19.231l3.277-1.784v13.106m4.382-11.322l3.276-1.784v13.106m4.382-8.765a4.346 4.346 0 0 1 5.203-4.258c1.82.35 3.275 1.925 3.456 3.77c.135 1.372-.3 2.726-1.248 3.558c-1.756 1.541-7.41 5.695-7.41 5.695H36"></svg:path>`,
})
export class Arcticons112Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
