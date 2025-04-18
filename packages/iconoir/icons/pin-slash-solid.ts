import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPinSlashSolidIcon],svg[iconoir-pin-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.5 14.5L3 21"></svg:path><svg:path fill="currentColor" d="m5 9.485l9.193 9.193l1.697-1.698l-.102-.98l-8.112-8.11l-.979-.102zm10.157-6.813l5.85 5.85l-4.308 3.653L11.485 7z"></svg:path><svg:path d="m3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirPinSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
