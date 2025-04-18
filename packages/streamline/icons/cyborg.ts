import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCyborgIcon],svg[streamline-cyborg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 9.082c0-3-2.46-4.636-5.5-4.636S1.5 6.082 1.5 9.082v3.364a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1zM7 4.446v-1.5m0-.251a1.07 1.07 0 1 0 0-2.14a1.07 1.07 0 0 0 0 2.14"></svg:path><svg:path d="M12.5 9.946h-.95a1 1 0 0 0-.834.446l-.3.452a1 1 0 0 1-.833.447H4.416a1 1 0 0 1-.833-.447l-.3-.452a1 1 0 0 0-.833-.446H1.5M4.75 8a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineCyborgIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
