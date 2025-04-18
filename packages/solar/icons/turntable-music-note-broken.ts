import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTurntableMusicNoteBrokenIcon],svg[solar-turntable-music-note-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.995-2c-.03-3.413-.219-5.295-1.46-6.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536M19 20v-8"></svg:path><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path stroke-linecap="round" d="M22 15a3 3 0 0 1-3-3"></svg:path><svg:path d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path></svg:g>`,
})
export class SolarTurntableMusicNoteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
