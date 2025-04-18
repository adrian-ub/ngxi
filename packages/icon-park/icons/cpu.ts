import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCpuIcon],svg[icon-park-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M38 8H10C8.89543 8 8 8.89543 8 10V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V10C40 8.89543 39.1046 8 38 8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M30 18H18V30H30V18Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14.9092 2V8V2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.9092 2V8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14.9092 40V46V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.9092 40V46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 2V8V2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 2V8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 40V46V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40V46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M33.0908 2V8V2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.0908 2V8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M33.0908 40V46V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.0908 40V46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 14.9092H8H2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 14.9092H8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M40 14.9092H46H40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 14.9092H46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 24H8H2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 24H8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M40 24H46H40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24H46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 33.0908H8H2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 33.0908H8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M40 33.0908H46H40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 33.0908H46"></svg:path></svg:g>`,
})
export class IconParkCpuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
