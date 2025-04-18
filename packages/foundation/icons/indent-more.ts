import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationIndentMoreIcon],svg[foundation-indent-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81.232 15.138H18.769a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h62.463a3.407 3.407 0 0 0 3.407-3.407v-3.143a3.407 3.407 0 0 0-3.407-3.407m0 59.767H18.769a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h62.463a3.407 3.407 0 0 0 3.407-3.407v-3.143a3.41 3.41 0 0 0-3.407-3.407m3.407-16.515a3.407 3.407 0 0 0-3.407-3.407h-38.82a3.407 3.407 0 0 0-3.407 3.407v3.143a3.406 3.406 0 0 0 3.407 3.406h38.82a3.407 3.407 0 0 0 3.407-3.406zm0-19.813a3.407 3.407 0 0 0-3.407-3.407h-38.82a3.407 3.407 0 0 0-3.407 3.407v3.143a3.406 3.406 0 0 0 3.407 3.406h38.82a3.407 3.407 0 0 0 3.407-3.406zM15.93 57.847a.57.57 0 0 0 .406-.172L28.763 50.5l-.014-.024a.56.56 0 0 0 .289-.484a.57.57 0 0 0-.34-.519l.006-.01l-12.376-7.146a.567.567 0 0 0-.963.389h-.003v14.573a.567.567 0 0 0 .568.568"></svg:path>`,
})
export class FoundationIndentMoreIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
