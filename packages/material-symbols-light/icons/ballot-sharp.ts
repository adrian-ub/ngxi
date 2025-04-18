import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBallotSharpIcon],svg[material-symbols-light-ballot-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h4.616V9H12zm0 5h4.616v-1H12zm-4.23-4.27h2.46V8.27H7.77zm0 5h2.46v-2.46H7.77zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightBallotSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
