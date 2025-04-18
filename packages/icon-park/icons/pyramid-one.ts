import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPyramidOneIcon],svg[icon-park-pyramid-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M19 14L33 42H5L19 14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 25L15 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 42H43.5L35 28L30.5 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M25.9836 26.3959C32.2118 24.8136 35.9781 18.482 34.3959 12.2538C32.8136 6.02557 26.482 2.25926 20.2538 3.84151C14.0255 5.42376 10.2592 11.7554 11.8415 17.9836C12.2277 19.5037 12.8968 20.8772 13.7782 22.0621"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 42H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22.5 21L27.5 31"></svg:path></svg:g>`,
})
export class IconParkPyramidOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
