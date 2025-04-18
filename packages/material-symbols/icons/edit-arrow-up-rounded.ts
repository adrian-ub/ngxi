import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditArrowUpRoundedIcon],svg[material-symbols-edit-arrow-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17v-2.25q0-.4.163-.763t.437-.637l6.775-6.775q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4l-6.75 6.75q-.275.275-.638.425T6.25 18zm7.725-7.475l1.25-1.275l-1.225-1.225l-1.275 1.25zM18.5 7.8l-.6.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.3-2.3q.3-.3.7-.3t.7.3L22.5 7q.275.3.275.712t-.3.688t-.712.288t-.688-.288l-.575-.575V19q0 .425-.287.713T19.5 20t-.712-.288T18.5 19z"></svg:path>`,
})
export class MaterialSymbolsEditArrowUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
