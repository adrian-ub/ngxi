import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMytelMyidIcon],svg[arcticons-mytel-myid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m19.822 13.565v8.71"></svg:path><svg:path d="M9.551 27.666v-8.602l4.338 8.71l4.337-8.71v8.71m7.717-2.05v2.94a2.18 2.18 0 0 1-2.169 2.177h0c-.65 0-1.193-.218-1.518-.653"></svg:path><svg:path d="M25.943 22.004v3.593a2.18 2.18 0 0 1-2.169 2.178h0a2.18 2.18 0 0 1-2.169-2.178v-3.593m11.097 5.771v-8.71h1.952c2.06 0 3.795 1.742 3.795 3.81v1.09c0 2.068-1.735 3.81-3.795 3.81z"></svg:path></svg:g>`,
})
export class ArcticonsMytelMyidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
