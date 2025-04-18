import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightParkRoundedIcon],svg[material-symbols-light-park-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.012 17H6.393q-.475 0-.712-.429q-.238-.429.035-.833L8.885 11h-.402q-.492 0-.728-.432t.057-.835l3.517-5.058q.13-.18.312-.264t.364-.084t.358.084t.308.264l3.518 5.058q.292.403.056.835t-.728.432h-.401l3.167 4.739q.273.403.035.832q-.237.429-.712.429h-4.618v3.27q0 .31-.21.52t-.52.21h-.439q-.343 0-.575-.232t-.232-.576z"></svg:path>`,
})
export class MaterialSymbolsLightParkRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
