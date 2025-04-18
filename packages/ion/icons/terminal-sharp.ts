import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionTerminalSharpIcon],svg[ion-terminal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12m57.51 193.5l76.88-61.5l-76.88-61.5l20-25l108.1 86.5L93.5 262.49ZM272 256h-96v-32h96Z"></svg:path>`,
})
export class IonTerminalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
