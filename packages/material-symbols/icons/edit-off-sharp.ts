import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditOffSharpIcon],svg[material-symbols-edit-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.55 12.675L11.325 8.45l6.3-6.3l4.2 4.275zM19.8 22.6l-7.075-7.05L7.25 21H3v-4.225L8.475 11.3L1.4 4.2l1.425-1.425l18.4 18.4zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsEditOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
