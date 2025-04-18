import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeImprovementAndToolsOutlineRoundedIcon],svg[material-symbols-light-home-improvement-and-tools-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 20.248q-.16 0-.296-.053t-.267-.183l-.956-.956q-.217-.217-.348-.518T10 17.906V5.892L8.548 3.825q-.177-.27-.037-.547Q8.651 3 8.969 3h6.062q.318 0 .458.278t-.037.547L14 5.892v12.014q0 .332-.13.632t-.349.518l-.956.955q-.13.131-.27.184q-.139.053-.298.053M11 10.5h2V5.6L14 4h-4l1 1.6zm2 1h-2v3h2zm0 6.577V15.5h-2v2.577l1 1zM12 15.5"></svg:path>`,
})
export class MaterialSymbolsLightHomeImprovementAndToolsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
