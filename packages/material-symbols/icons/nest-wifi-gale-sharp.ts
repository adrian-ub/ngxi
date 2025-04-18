import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestWifiGaleSharpIcon],svg[material-symbols-nest-wifi-gale-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 20l-.325-1H4.15q-.875 0-1.462-.625q-.588-.625-.538-1.5l.725-11q.05-.8.625-1.338Q4.075 4 4.875 4h14.25q.8 0 1.375.537q.575.538.625 1.338l.725 11q.05.875-.538 1.5q-.587.625-1.462.625h-.525L19 20Zm-.4-10h14.8l-.275-4H4.875Zm-.45 7h15.7l-.325-5H4.475l-.325 5Z"></svg:path>`,
})
export class MaterialSymbolsNestWifiGaleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
