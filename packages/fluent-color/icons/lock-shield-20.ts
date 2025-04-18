import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLockShield20Icon],svg[fluent-color-lock-shield-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLockShield200)" fill-rule="evenodd" d="M10 3a2 2 0 0 0-2 2v1.734H6.5V5a3.5 3.5 0 1 1 7 0v1.734H12V5a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorLockShield201)" d="M6 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorLockShield203)" d="M10 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="url(#fluentColorLockShield204)" d="M6 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path fill="url(#fluentColorLockShield202)" d="M14 18.524c-1.175-.603-2.97-1.945-3-4.524v-2.562c0-.277.225-.497.499-.536c1.37-.193 2.485-1.134 3.066-1.725A.6.6 0 0 1 15 9c.16 0 .32.059.435.177c.58.591 1.696 1.532 3.066 1.725c.274.039.499.26.499.536V14c-.03 2.579-1.825 3.921-3 4.524a6.5 6.5 0 0 1-.87.372a.4.4 0 0 1-.26 0a6.5 6.5 0 0 1-.87-.372"></svg:path><svg:defs><svg:lineargradient id="fluentColorLockShield200" x1="8" x2="14.039" y1=".5" y2="9.669" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC205"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockShield201" x1="18" x2="5.469" y1="18.75" y2="6.838" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLockShield202" x1="12.5" x2="20.018" y1="9" y2="17.701" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#62BE55"></svg:stop><svg:stop offset="1" stop-color="#1E794A"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorLockShield203" cx="0" cy="0" r="1" gradientTransform="matrix(-.99997 -3.5 4.85626 -1.38747 10.5 13)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorLockShield204" cx="0" cy="0" r="1" gradientTransform="rotate(157.38 5.7 9.2)scale(6.5 7.02)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset=".99" stop-color="#EB4824" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorLockShield20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
