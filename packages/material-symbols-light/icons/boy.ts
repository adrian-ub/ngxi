import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBoyIcon],svg[material-symbols-light-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 7.5q-.567 0-.964-.401t-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397m-1.342 11.462v-4.616h-1V9.923q0-.555.395-.95q.396-.396.951-.396h2q.555 0 .95.395q.396.396.396.951v4.423h-1v4.616z"></svg:path>`,
})
export class MaterialSymbolsLightBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
