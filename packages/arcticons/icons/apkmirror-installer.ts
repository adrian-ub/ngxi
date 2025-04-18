import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApkmirrorInstallerIcon],svg[arcticons-apkmirror-installer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.999 34.944l-7.112-21.886L9.5 34.944m2.462-7.386h9.575M38.5 34.942l-7.113-21.886l-7.386 21.886"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path>`,
})
export class ArcticonsApkmirrorInstallerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
