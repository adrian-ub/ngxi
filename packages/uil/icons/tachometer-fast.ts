import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTachometerFastIcon],svg[uil-tachometer-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.29 10.29l-2.78 2.78A2 2 0 0 0 12 13a2 2 0 0 0-2 2a2 2 0 0 0 .07.51l-.78.78a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l.78-.78A2 2 0 0 0 12 17a2 2 0 0 0 2-2a2 2 0 0 0-.07-.51l2.78-2.78a1 1 0 0 0-1.42-1.42M12 4A10 10 0 0 0 2 14a9.9 9.9 0 0 0 1.69 5.56a1 1 0 0 0 1.66-1.12a8 8 0 1 1 13.3 0a1 1 0 0 0 .27 1.39a1 1 0 0 0 .56.17a1 1 0 0 0 .83-.44A9.9 9.9 0 0 0 22 14A10 10 0 0 0 12 4"></svg:path>`,
})
export class UilTachometerFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
