import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsWineSharpIcon],svg[famicons-wine-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288Zm-336.65-3.67h281l-37.81 38H154.16Z"></svg:path>`,
})
export class FamiconsWineSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
