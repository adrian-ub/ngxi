import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRingVolumeSharpIcon],svg[material-symbols-light-ring-volume-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.064 19.866l-2.972-2.91l.635-.66q2.137-2.148 4.857-3.222T12 12t5.404 1.074t4.85 3.222l.654.66l-2.971 2.91l-3.437-2.597v-3.465q-1.142-.396-2.277-.6T12 13t-2.223.204t-2.277.6v3.465zm7.455-12.981v-4h1v4zm6.1 2.619l-.707-.72l2.857-2.819l.708.72zm-11.2 0L3.523 6.723l.746-.757l2.858 2.819z"></svg:path>`,
})
export class MaterialSymbolsLightRingVolumeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
