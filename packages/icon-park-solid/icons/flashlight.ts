import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFlashlightIcon],svg[icon-park-solid-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFlashlight0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M17 22.196a.4.4 0 0 0-.157-.314A19.6 19.6 0 0 1 9 6.196V4h30v2.196a19.6 19.6 0 0 1-7.843 15.686a.4.4 0 0 0-.157.314V44H17z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 11H10m14 17.008v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 22A20 20 0 0 1 9 6V4m30 0v2a20 20 0 0 1-8 16v0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFlashlight0)"></svg:path>`,
})
export class IconParkSolidFlashlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
