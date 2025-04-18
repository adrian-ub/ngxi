import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNomadIcon],svg[file-icons-nomad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.28 512L0 381.024V127.405L219.089 0L438 126.214v257.191zm108.855-410.858l-74.1 43.374v87.547l-74.244-44.087l-71.39 41.79v182.983l74.1-45.442v-98.495l79.144 49.962L329.135 278z"></svg:path>`,
})
export class FileIconsNomadIcon {
  readonly viewBox = input("0 0 438 512")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
