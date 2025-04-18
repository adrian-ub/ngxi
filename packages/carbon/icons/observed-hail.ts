import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonObservedHailIcon],svg[carbon-observed-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path><svg:circle cx="13.5" cy="23.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 16.586L15.586 13L17 14.413L13.413 18zm6 0L21.586 13L23 14.413L19.413 18z"></svg:path>`,
})
export class CarbonObservedHailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
