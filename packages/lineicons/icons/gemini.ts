import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsGeminiIcon],svg[lineicons-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.996 12.018a10.65 10.65 0 0 0-9.98 9.98h-.04c-.32-5.364-4.613-9.656-9.976-9.98v-.04c5.363-.32 9.656-4.613 9.98-9.976h.04c.324 5.363 4.617 9.656 9.98 9.98v.036z"></svg:path>`,
})
export class LineiconsGeminiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
