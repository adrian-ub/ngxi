import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSadCryingIcon],svg[uil-sad-crying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0-3.41 19.39h.06a9.8 9.8 0 0 0 6.7 0h.06A10 10 0 0 0 12 2m2 17.74a7.8 7.8 0 0 1-4 0v-3.13a3.79 3.79 0 0 1 4 0Zm2-.82V11a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2v3.39a6 6 0 0 0-4 0V11a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2v7.92a8 8 0 1 1 8 0"></svg:path>`,
})
export class UilSadCryingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
