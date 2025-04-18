import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHeadphoneSoundIcon],svg[icon-park-solid-headphone-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 28a2 2 0 0 1 2-2h4v12H6a2 2 0 0 1-2-2zm34-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 36V24c0-7.732 6.268-14 14-14s14 6.268 14 14v12M10 26H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4zm28 0h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32h4l2-6l4 12l2-6h4"></svg:path></svg:g>`,
})
export class IconParkSolidHeadphoneSoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
