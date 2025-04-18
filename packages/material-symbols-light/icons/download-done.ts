import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDownloadDoneIcon],svg[material-symbols-light-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.55 15.192l-4.579-4.578l.713-.714l3.866 3.866L18.316 5l.713.714zM6 19v-1h12v1z"></svg:path>`,
})
export class MaterialSymbolsLightDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
