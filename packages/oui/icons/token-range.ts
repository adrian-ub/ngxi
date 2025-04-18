import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenRangeIcon],svg[oui-token-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.82 5.116a.5.5 0 0 0-.704.704l.064.064L11.719 8l-2.54 2.116a.5.5 0 0 0-.114.63l.05.074a.5.5 0 0 0 .63.115l.075-.05l3-2.5a.5.5 0 0 0 .071-.697l-.07-.072zm-3.64 0a.5.5 0 0 1 .704.704l-.064.064L4.281 8l2.54 2.116a.5.5 0 0 1 .114.63l-.05.074a.5.5 0 0 1-.63.115l-.075-.05l-3-2.5a.5.5 0 0 1-.071-.697l.07-.072z"></svg:path>`,
})
export class OuiTokenRangeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
