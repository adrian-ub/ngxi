import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAzureIcon],svg[lineicons-azure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.903 4.032L7 9.13l-5 9.065h4.548zm.839 1.226l-2.516 7.097L16 18.387l-9.355 1.58H22z"></svg:path>`,
})
export class LineiconsAzureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
