import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShoppingmodeOutlineIcon],svg[material-symbols-light-shoppingmode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.001 21q-.303 0-.61-.121q-.305-.121-.55-.364l-6.362-6.361q-.25-.248-.365-.548T3 12.996t.114-.616t.365-.551l8.338-8.345q.223-.222.528-.353T12.973 3h6.387q.69 0 1.162.48t.472 1.154v6.387q0 .332-.121.632t-.357.518l-8.364 8.345q-.242.242-.545.363T11 21m-.447-1.192q.192.192.452.192t.452-.192l8.363-8.35q.096-.096.135-.212q.038-.115.038-.23V4.635q0-.27-.183-.443q-.182-.173-.452-.173h-6.63l-8.537 8.523Q4 12.734 4 12.994t.192.452zm6.883-12.25q.424 0 .722-.292t.297-.708q0-.425-.295-.722t-.717-.297t-.714.295t-.293.716t.291.715t.709.293m-5.456 4.48"></svg:path>`,
})
export class MaterialSymbolsLightShoppingmodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
