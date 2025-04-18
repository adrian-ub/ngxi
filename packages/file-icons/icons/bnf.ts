import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsBnfIcon],svg[file-icons-bnf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.74 225.441v-44.933H512v44.933zM512 329.63V284.7H277.74v44.93zM237.798 191.113c0-34.45-40.189-56.098-72.166-38.873s-31.977 60.521 0 77.746s72.166-4.423 72.166-38.873M23.983 229.986c-31.977-17.225-31.977-60.521 0-77.746s72.166 4.423 72.166 38.873s-40.189 56.098-72.166 38.873m213.815 90.9c0-34.45-40.189-56.097-72.166-38.872s-31.977 60.52 0 77.746s72.166-4.423 72.166-38.873M23.983 359.76c-31.977-17.225-31.977-60.521 0-77.746s72.166 4.423 72.166 38.873s-40.189 56.098-72.166 38.873"></svg:path>`,
})
export class FileIconsBnfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
