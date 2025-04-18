import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTagLineDuotoneIcon],svg[solar-tag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321c-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302s1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45c1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704c-2.69 2.69-4.034 4.034-5.705 4.034c-1.67 0-3.015-1.344-5.704-4.033z"></svg:path><svg:circle cx="8.607" cy="8.879" r="2" opacity=".5" transform="rotate(-45 8.607 8.879)"></svg:circle><svg:path stroke-linecap="round" d="m11.542 18.5l6.979-6.98" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
