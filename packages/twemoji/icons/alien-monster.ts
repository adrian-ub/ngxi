import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAlienMonsterIcon],svg[twemoji-alien-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#553986" d="M26 31h4v4h-4zM6 31h4v4H6zm24-21h-2V8h-2V6h-3V2h-2v4h-6V2h-2v4h-3v2H8v2H6v7H2v2h4v7h4v5h5v-5h6v5h5v-5h4v-7h4v-2h-4zM16 21h-4v-8h4zm4 0v-8h4v8zM34 6h2v11h-2zM0 6h2v11H0z"></svg:path>`,
})
export class TwemojiAlienMonsterIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
