import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayComposeIcon],svg[subway-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 28.3H0v469.3h85.3V263H64zm149.3 0h-64V263H128v234.7h106.7V263h-21.3V28.3zm234.7 0V263h-21.3v234.7H512V28.3zm-85.3 0h-64V263h-21.3v234.7H384V263h-21.3z"></svg:path>`,
})
export class SubwayComposeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
