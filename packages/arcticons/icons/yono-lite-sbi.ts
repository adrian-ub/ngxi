import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYonoLiteSbiIcon],svg[arcticons-yono-lite-sbi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.556 19.95v7.803h3.901m2.639-7.803v7.803m10.447 0h3.901m-3.901-7.803h3.901m-3.901 3.902h2.536m-2.536-3.902v7.803m-7.808-7.803h5.169m-2.536 7.803V19.95m-.254-3.098V9.049l5.17 7.803V9.049m-15.352 0l-2.536 3.901l-2.633-3.901m2.633 7.803V12.95m4.764 1.317a2.585 2.585 0 1 0 5.17 0v-2.633A2.623 2.623 0 0 0 19.697 9a2.54 2.54 0 0 0-2.536 2.634Zm15.908 0a2.585 2.585 0 1 0 5.17 0v-2.633A2.623 2.623 0 0 0 35.603 9a2.54 2.54 0 0 0-2.536 2.634Zm3.884 16.93V39m-15.284-.878a2.33 2.33 0 0 0 1.95.878h1.17a1.957 1.957 0 0 0 1.952-1.95h0a1.957 1.957 0 0 0-1.95-1.951h-1.27a1.957 1.957 0 0 1-1.95-1.951h0a1.957 1.957 0 0 1 1.95-1.951h1.17a2.1 2.1 0 0 1 1.951.878m5.839 3.024a1.95 1.95 0 1 1 0 3.901h-3.219v-7.803h3.219a1.95 1.95 0 1 1 0 3.902m0 0h-3.219m-13.242 3.754a3.968 3.968 0 1 0-2.006 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5.5a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class ArcticonsYonoLiteSbiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
