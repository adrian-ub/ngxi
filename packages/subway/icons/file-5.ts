import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile5Icon],svg[subway-file-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M334.5 0v128h128zm-21.3 0H78.5v512h384V149.3H313.2zm-21.4 448h-42.7v-42.7h42.7zm0-64h-42.7l-21.3-149.3h85.3z"></svg:path>`,
})
export class SubwayFile5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
