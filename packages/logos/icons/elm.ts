import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosElmIcon],svg[logos-elm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1293D8"><svg:path d="m8.529 256l119.399-119.399L247.327 256zM0 8.673l119.399 119.399L0 247.471z"></svg:path><svg:path fill-opacity=".75" d="M136.595 0H256v119.405z"></svg:path><svg:path d="m136.456 128.072l55.436 55.436l55.435-55.436l-55.435-55.435z"></svg:path><svg:path fill-opacity=".75" d="M8.529.144h110.87l52.024 52.024H60.553zm174.834 63.964l-55.435 55.436l-55.436-55.436zm72.493 183.363l-55.436-55.435l55.436-55.435z"></svg:path></svg:g>`,
})
export class LogosElmIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
