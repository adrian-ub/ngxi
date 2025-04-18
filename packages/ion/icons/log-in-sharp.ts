import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogInSharpIcon],svg[ion-log-in-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 80H192a16 16 0 0 0-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 0 1 0 22.62L288 358.63L265.37 336l64-64H176v144a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M64 240h112v32H64z"></svg:path>`,
})
export class IonLogInSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
