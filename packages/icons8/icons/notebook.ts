import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8NotebookIcon],svg[icons8-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v13.563l-2.28 2.312a2.45 2.45 0 0 0-.72 1.72A2.416 2.416 0 0 0 4.406 26h23.188A2.417 2.417 0 0 0 30 23.594c0-.64-.266-1.266-.72-1.72L27 19.564V6zm2 2h18v11H7zm-.563 13h19.125l2.313 2.28c.077.08.125.204.125.314c0 .24-.166.406-.406.406H4.406A.387.387 0 0 1 4 23.594a.47.47 0 0 1 .125-.313z"></svg:path>`,
})
export class Icons8NotebookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
