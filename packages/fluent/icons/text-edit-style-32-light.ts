import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextEditStyle32LightIcon],svg[fluent-text-edit-style-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.427 2.625c-.337-.833-1.517-.833-1.854 0L3.037 16.312a.5.5 0 0 0 .927.375L5.859 12h7.282l1.736 4.293l.768-.768zM12.737 11H6.263L9.5 3zm15.08.182a4.036 4.036 0 0 0-5.707 0L11.514 21.779c-.3.3-.52.672-.636 1.08l-1.859 6.504a.5.5 0 0 0 .619.618l6.5-1.858a2.5 2.5 0 0 0 1.081-.636L27.817 16.89a4.036 4.036 0 0 0 0-5.707m-5 .707a3.035 3.035 0 1 1 4.293 4.293L16.512 26.78c-.18.18-.404.312-.649.382l-5.635 1.61l1.611-5.638a1.5 1.5 0 0 1 .382-.648z"></svg:path>`,
})
export class FluentTextEditStyle32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
