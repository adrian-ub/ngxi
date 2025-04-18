import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMoonFIcon],svg[jam-moon-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.253.335A10.09 10.09 0 0 0 8.768 8c0 4.632 3.068 8.528 7.232 9.665A9.56 9.56 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335"></svg:path>`,
})
export class JamMoonFIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
