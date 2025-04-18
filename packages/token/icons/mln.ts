import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMlnIcon],svg[token-mln-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.703 6.162c-.808 0-1.46.671-1.46 1.498V12H9.324V9.086a.973.973 0 1 0-1.946 0V12H4.946v-.973a.973.973 0 0 0-1.946 0V12h1.946v1.571c0 .745.545 1.348 1.216 1.348c.672 0 1.216-.603 1.216-1.348V12h1.946v4.315a1.494 1.494 0 0 0 1.46 1.523c.807 0 1.46-.681 1.46-1.523V12h2.918v3.42c0 .53.438.958.973.958a.966.966 0 0 0 .973-.958V12h1.946v.973a.972.972 0 1 0 1.946 0V12h-1.946V8.945c0-.462-.438-.837-.973-.837s-.973.375-.973.837V12h-1.946V7.66c0-.827-.652-1.498-1.46-1.498"></svg:path>`,
})
export class TokenMlnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
