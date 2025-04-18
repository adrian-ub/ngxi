import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPanzerfaustIcon],svg[game-icons-panzerfaust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.752 139.172l51.998 54.29l13-12.45l-52-54.29zM187.74 256.424l9.683 10.11l56.33-53.952l-9.684-10.11l-56.33 53.952zM385.14 72.18l-38.345 72.733l24.227 25.294l74.315-35.176l-60.198-62.85zm15.994-9.322l54.207 56.595l7.832-35.195l-26.54-27.708zM48.828 433.784l20.75 21.666l9.39-8.992l-20.752-21.666zm22.388-21.442l20.75 21.665l264.318-253.164l-20.75-21.666z"></svg:path>`,
})
export class GameIconsPanzerfaustIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
