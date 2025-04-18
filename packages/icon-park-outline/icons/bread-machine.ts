import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBreadMachineIcon],svg[icon-park-outline-bread-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 27a8 8 0 0 1 8-8h18a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4zm27-8v-7c5 0 5-7 0-7H14c-5 0-5 7 0 7v7m8-8l-2 2m8-2l-2 2"></svg:path><svg:circle cx="24" cy="29" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 39v4m18-4v4"></svg:path></svg:g>`,
})
export class IconParkOutlineBreadMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
