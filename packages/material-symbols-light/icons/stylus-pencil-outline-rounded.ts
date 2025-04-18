import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusPencilOutlineRoundedIcon],svg[material-symbols-light-stylus-pencil-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.104 15.308q-.429 0-.671-.349q-.243-.348-.081-.751l3.846-9.82q.068-.179.228-.283t.34-.105h.45q.178 0 .339.105q.16.104.228.283l3.846 9.82q.161.403-.081.751q-.242.349-.671.349zm.277-1H15.6L12 5.128zm0 0H15.6zM6.144 20q-.423 0-.658-.335q-.236-.336-.1-.74l.087-.242q.162-.452.533-.721t.848-.27h10.292q.477 0 .848.27t.533.72l.087.243q.136.404-.1.74q-.235.335-.658.335z"></svg:path>`,
})
export class MaterialSymbolsLightStylusPencilOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
