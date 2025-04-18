import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVolumedownIcon],svg[whh-volumedown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m794 761l-45-45q84-85 84-204.5T749 308l45-45q49 48 76 112.5T897 512t-27 136t-76 113m-229 251L320 768V255L565 12q30-30 76 15v970q-45 45-76 15M256 768H64q-26 0-45-18.5T0 704V319q0-26 19-45t45-19h192z"></svg:path>`,
})
export class WhhVolumedownIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
