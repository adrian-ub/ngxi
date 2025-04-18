import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelIconsIcon],svg[raphael-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 14H14V4.083H4.083zM17 4.083V14h9.917V4.083zm0 22.834h9.917V17H17zm-12.917 0H14V17H4.083z"></svg:path>`,
})
export class RaphaelIconsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
