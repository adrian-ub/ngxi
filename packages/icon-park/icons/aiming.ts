import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAimingIcon],svg[icon-park-aiming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 37V44V37Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 37V44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M36 24H44H36Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 24H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 24H11H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H11"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 11V4V11Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 11V4"></svg:path></svg:g>`,
})
export class IconParkAimingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
