import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeadphoneMuteIcon],svg[hugeicons-headphone-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m1.998 2l20 20M17.5 13.11c.42-.36 1.218-.63 1.395-.606c.663-.066 1.032.409 1.41.869c.944 1.146 1.416 1.719 1.588 2.35c.14.51.185 1.113-.115 1.773m-14.78-3.191c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.588 2.35c-.14.51-.14 1.043 0 1.553c.251.921 1.047 1.694 1.635 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z"></svg:path><svg:path d="M18.998 12.5v-2a7 7 0 0 0-7-7c-1.367 0-2.34.4-3.48 1m-3.52 8v-2c0-1.63.64-2.76 1.48-3.96"></svg:path></svg:g>`,
})
export class HugeiconsHeadphoneMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
