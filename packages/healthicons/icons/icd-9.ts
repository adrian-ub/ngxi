import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIcd9Icon],svg[healthicons-icd-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm6 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-4h-1a1 1 0 0 1-1-1m9.587 19.984C21.8 33.55 22.393 34 23.14 34h1.722c.957 0 1.639-.722 1.639-1.5v-1.876a3.75 3.75 0 0 1-1.639.376H23.14c-1.958 0-3.639-1.517-3.639-3.5s1.68-3.5 3.639-3.5h1.722c1.958 0 3.639 1.517 3.639 3.5v5c0 1.983-1.68 3.5-3.639 3.5H23.14c-1.552 0-2.913-.942-3.426-2.317a1 1 0 1 1 1.874-.7M24.861 29c.957 0 1.639-.722 1.639-1.5s-.682-1.5-1.639-1.5h-1.722c-.957 0-1.639.722-1.639 1.5s.682 1.5 1.639 1.5zm.995-14.63a2.199 2.199 0 0 0-3.756 1.555a2.2 2.2 0 0 0 3.756 1.556a1 1 0 0 1 1.414 1.414a4.2 4.2 0 1 1 0-5.94a1 1 0 1 1-1.414 1.415M31 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a4 4 0 0 0 0-8zm1 6v-4h1a2 2 0 1 1 0 4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsIcd9Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
