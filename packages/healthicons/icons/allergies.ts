import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAllergiesIcon],svg[healthicons-allergies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31 25.731V9a2 2 0 1 0-4 0v14h-2V6a2 2 0 1 0-4 0v17h-2V9a2 2 0 1 0-4 0v16.111h-2V15a2 2 0 1 0-4 0v17c0 6.627 5.373 12 12 12h1.422a12 12 0 0 0 10.553-6.287l6.938-12.816a2.552 2.552 0 0 0-4.36-2.642L32.83 26.29c-.552.817-1.829.427-1.829-.56m-12.977 4.252a1 1 0 1 0-.002-2a1 1 0 0 0 .002 2m5 .996a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1.997 3.002a1 1 0 1 1-2 .002a1 1 0 0 1 2-.002m4-.003a1 1 0 1 0-.001-2a1 1 0 0 0 .001 2m3.003 2.997a1 1 0 1 1-2 .002a1 1 0 0 1 2-.002m.996-4a1 1 0 1 0-.001-2a1 1 0 0 0 .001 2m-5.996 5.004a1 1 0 1 1-2 .002a1 1 0 0 1 2-.002m-6 .005a1 1 0 1 0-.001-2a1 1 0 0 0 .001 2m-1.004-4.999a1 1 0 1 1-2 .002a1 1 0 0 1 2-.002" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAllergiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
