import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiOilDrumIcon],svg[twemoji-oil-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M7 25h22v9H7zm0-11h22v9H7zM7 3h22v10H7z"></svg:path><svg:path fill="#269" d="M30 3.178a.82.82 0 0 1-.822.822H6.822A.82.82 0 0 1 6 3.178v-.356C6 2.368 6.368 2 6.822 2h22.355c.455 0 .823.368.823.822zm0 11a.82.82 0 0 1-.822.822H6.822A.82.82 0 0 1 6 14.178v-.355c0-.455.368-.823.822-.823h22.355c.455 0 .823.368.823.822zm0 10a.82.82 0 0 1-.822.822H6.822A.82.82 0 0 1 6 24.178v-.355c0-.455.368-.823.822-.823h22.355c.455 0 .823.368.823.822zm0 11a.82.82 0 0 1-.822.822H6.822A.82.82 0 0 1 6 35.178v-.355c0-.455.368-.823.822-.823h22.355c.455 0 .823.368.823.822z"></svg:path><svg:path fill="#99AAB5" d="M26 1.128a.873.873 0 0 1-.872.872h-2.256A.873.873 0 0 1 22 1.128V.872c0-.481.391-.872.872-.872h2.256c.481 0 .872.391.872.872z"></svg:path>`,
})
export class TwemojiOilDrumIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
