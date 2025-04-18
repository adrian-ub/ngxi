import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDeskLampOneIcon],svg[icon-park-twotone-desk-lamp-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDeskLampOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 40.999h36m-3-22v22m-12-27l12 10"></svg:path><svg:path fill="#555" d="M26.34 14.577a4.4 4.4 0 0 0 .567-.794c1.182-2.115.45-4.982-1.6-6.204c-2.048-1.22-4.819-.44-6.003 1.673c-.187.334-.29.595-.384.904c-3.576-.276-7.007 1.475-8.92 4.895L26.694 25c1.913-3.42 1.666-7.364-.354-10.423Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDeskLampOne0)"></svg:path>`,
})
export class IconParkTwotoneDeskLampOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
