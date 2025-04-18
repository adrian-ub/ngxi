import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKidStarOutlineSharpIcon],svg[material-symbols-light-kid-star-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.125 7.092L12 1.937l3.875 5.155l6.139 2.07l-3.941 5.336l.156 6.056L12 18.733l-6.229 1.82l.156-6.08l-3.915-5.312zm.629.86l-5.1 1.735l3.292 4.494l-.138 5.006L12 17.697l5.192 1.534l-.138-5.05l3.292-4.444l-5.1-1.785L12 3.616zM12 11.423"></svg:path>`,
})
export class MaterialSymbolsLightKidStarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
