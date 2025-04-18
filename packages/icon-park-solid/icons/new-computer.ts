import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNewComputerIcon],svg[icon-park-solid-new-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="28" x="6" y="6" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M14 42h20m-10-8v8"></svg:path></svg:g>`,
})
export class IconParkSolidNewComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
