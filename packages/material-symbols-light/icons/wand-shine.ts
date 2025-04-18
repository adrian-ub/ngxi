import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWandShineIcon],svg[material-symbols-light-wand-shine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.66 7.398L6.37 5.11l.713-.714l2.289 2.289zm3.84-2.163v-3.25h1v3.25zm6.39 12.394l-2.288-2.289l.714-.713l2.288 2.289zM17.7 7.014l-.713-.714l2.288-2.288l.714.713zm1.066 4.486v-1h3.25v1zM5.163 20.508l-1.691-1.69q-.242-.243-.242-.566t.242-.565l8.517-8.523q.587-.587 1.414-.587t1.413.587t.587 1.413t-.587 1.414l-8.523 8.517q-.242.242-.565.242t-.565-.242m6.84-7.106l2.1-2.125q.3-.3.3-.7t-.3-.7q-.281-.28-.7-.28t-.7.28l-2.125 2.125z"></svg:path>`,
})
export class MaterialSymbolsLightWandShineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
