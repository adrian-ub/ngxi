import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelDocktopIcon],svg[raphael-docktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.916 23.667V7.333H3.083v16.334zm-3-3H6.082v-6.5h18.833v6.5z"></svg:path>`,
})
export class RaphaelDocktopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
