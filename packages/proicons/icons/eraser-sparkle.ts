import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsEraserSparkleIcon],svg[proicons-eraser-sparkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.788 20.5h9.02m-9.02 0a3.47 3.47 0 0 0 2.486-1.02l1.29-1.29M9.788 20.5a3.47 3.47 0 0 1-2.438-1.02l-3.33-3.33a3.47 3.47 0 0 1-1.003-2.802M6.6 11.226l6.662 6.663l.301.301m0 0l5.417-5.417a3.48 3.48 0 0 0 0-4.923l-3.33-3.33a3.47 3.47 0 0 0-2.643-1.015"></svg:path><svg:path fill="currentColor" d="M8.6 1.419a.64.64 0 0 0-1.2 0l-.167.449a4 4 0 0 1-2.366 2.365l-.449.166a.64.64 0 0 0 0 1.202l.45.166a4 4 0 0 1 2.365 2.366l.166.449a.64.64 0 0 0 1.202 0l.166-.449a4 4 0 0 1 2.366-2.366l.449-.166a.64.64 0 0 0 0-1.202l-.45-.166a4 4 0 0 1-2.365-2.365zM3.876 7.262a.4.4 0 0 0-.752 0l-.103.28a2.5 2.5 0 0 1-1.479 1.479l-.28.104a.4.4 0 0 0 0 .75l.28.105a2.5 2.5 0 0 1 1.479 1.478l.103.28a.4.4 0 0 0 .752 0l.103-.28A2.5 2.5 0 0 1 5.458 9.98l.28-.104a.4.4 0 0 0 0-.751l-.28-.104a2.5 2.5 0 0 1-1.479-1.479z"></svg:path></svg:g>`,
})
export class ProiconsEraserSparkleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
