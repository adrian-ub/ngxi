import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeviceUnknownSharpIcon],svg[material-symbols-light-device-unknown-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.999 16.558q-.27 0-.467-.199q-.197-.198-.197-.468t.198-.467t.468-.197t.467.198t.197.468t-.198.467t-.468.198m-.441-2.777q0-.766.245-1.258t.928-1.108q.408-.388.667-.735t.26-.856q0-.54-.405-.986T12 8.392q-.713 0-1.082.34t-.572.783l-.812-.319q.3-.721.916-1.199T12 7.519q1.079 0 1.81.609q.732.608.732 1.691q0 .581-.251 1.02q-.252.438-.688.873q-.726.726-.924 1.084t-.237.985zM6 22V2h12v20zm1-3.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightDeviceUnknownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
