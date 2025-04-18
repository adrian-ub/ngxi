import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceTerraceIcon],svg[guidance-terrace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 14v3.5a2 2 0 0 0 2 2h2V23m17-9v3.5a2 2 0 0 1-2 2h-2V23M12 8.5V15m-7 1.5h14m-7 0V23M1.5 8.5h21v-2h-.086a5 5 0 0 1-.822-.068l-.396-.066a16 16 0 0 1-8.861-4.65l-.21-.216h-.25l-.21.216a16 16 0 0 1-8.861 4.65l-.396.066a5 5 0 0 1-.822.068H1.5z"></svg:path>`,
})
export class GuidanceTerraceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
