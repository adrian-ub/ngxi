import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintWindowIcon],svg[iconoir-fingerprint-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"></svg:path><svg:path stroke-linejoin="round" d="M12 21v-4.639c0-.51.1-.999.284-1.453M22 21v-3.185m-7.778-5.08A5.5 5.5 0 0 1 17 12c2.28 0 4.203 1.33 4.805 3.15M15 22v-2.177M19 22v-5.147C19 15.83 18.105 15 17 15s-2 .83-2 1.853v.794M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFingerprintWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
