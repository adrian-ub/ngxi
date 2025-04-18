import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTownHallIcon],svg[maki-town-hall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4H9V1L7.5 0L6 1v3H2L1 5v1h13V5zM7.5 1.5c.4 0 .7.3.7.8s-.3.7-.7.7s-.8-.3-.8-.8c0-.4.4-.7.8-.7M13 7H2v4l-1 1.5V14h13v-1.5L13 11zm-8 5.5H4V8h1zm3 0H7V8h1zm3 0h-1V8h1z"></svg:path>`,
})
export class MakiTownHallIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
