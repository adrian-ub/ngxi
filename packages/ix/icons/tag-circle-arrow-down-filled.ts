import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagCircleArrowDownFilledIcon],svg[ix-tag-circle-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v192l137.285 137.285c-6.004-16.18-9.285-33.683-9.285-51.952C192 258.859 258.859 192 341.333 192c18.269 0 35.772 3.281 51.952 9.285L256 64zm128 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m277.333 181.333c0-70.692-57.307-128-128-128H320V320h-42.667l64 64l64-64h-42.666l.016-61.307c36.797 9.478 63.984 42.884 63.984 82.64c0 47.129-38.205 85.334-85.334 85.334c-47.128 0-85.333-38.205-85.333-85.334c0-23.564 9.551-44.897 24.994-60.339l-30.17-30.17c-23.164 23.163-37.491 55.163-37.491 90.509c0 70.693 57.308 128 128 128s128-57.307 128-128" clip-rule="evenodd"></svg:path>`,
})
export class IxTagCircleArrowDownFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
